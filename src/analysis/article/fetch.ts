import { Readability } from "@mozilla/readability";
import { JSDOM } from "jsdom";
import { PdfData, VerbosityLevel } from "pdfdataextract";
import TurndownService from "turndown";
import { error, log } from "../console";
import { Article } from "../ontology";
import {
  max_length_of_textContent_to_use_as_summary,
  min_length_of_summary,
} from "@/config";

/**
 * Extracts an article from the HTML page at a given URL.
 *
 * @param url The URL of an HTML page.
 * @returns The {@link Article} extracted from the HTML page. If there was any error, returns null instead.
 */
export async function fetchArticle(url: string): Promise<Article | null> {
  try {
    log(`Fetching article at URL: ${url}`);

    if (
      url ===
      "https://www.washingtonpost.com/technology/2025/08/29/tesla-autopilot-crashes-evidence-testimony-wrongful-death/"
    )
      return null;

    // special case: github
    if (url.includes("github.com")) {
      const readme = await fetchGithubRepositoryReadme(url);
      if (readme === null) return null;
      const data = await fetchGithubRepositoryData(url);
      if (data === null) return null;
      return {
        title: data.full_name,
        tags: data.topics,
        content: readme,
        textContent: readme,
        siteName: "https://github.com",
      };
    }

    // special case: arxiv
    if (url.includes("arxiv.org")) {
      const data = await fetchArxivArticleData(url);
      if (data === null) return null;
      return {
        url,
        title: data.title,
        tags: data.categories,
        content: data.summary,
        textContent: data.summary,
        excerpt: data.summary,
        publishedTime: data.publishedDate,
        byline: data.authors.join(", "),
        siteName: "https://arxiv.org",
      };
    }

    // special case: pdf
    const pdfData = await fetchPdfText(url);
    if (pdfData !== null) {
      if (pdfData.text === undefined) return null;
      return {
        url,
        title:
          pdfData.info?.Title ??
          (pdfData.outline !== undefined && pdfData.outline.length > 0
            ? pdfData.outline[0].title
            : url),
        publishedTime: pdfData.info?.CreationDate,
        content: pdfData.text.join("\n"),
        byline: pdfData.info?.Author,
        textContent: pdfData.text.join("\n"),
        tags: pdfData.info?.Keywords?.split(",")
          .map((s) => s.trim())
          .filter((s) => s.length > 0),
      };
    }

    // default case
    const html = await (await fetch(url, { method: "GET" })).text();
    const doc = new JSDOM(html, { url });
    const reader = new Readability(doc.window.document);
    const prearticle = reader.parse();
    if (!prearticle) return null;
    const article = Object.entries(prearticle).reduce((acc, [key, value]) => {
      // @ts-expect-error Object.entries is not type-safe
      acc[key] = value === null ? undefined : value;
      return acc;
    }, {} as Article);
    // if the article summary is too short, then it's probably a placeholder so
    // don't use it
    if (
      article.summary !== undefined &&
      article.summary.length < min_length_of_summary
    )
      article.summary = undefined;
    // if there is no summary, but the content is short, then just use the
    // content as the summary
    if (
      article.summary === undefined &&
      article.textContent !== undefined &&
      article.textContent.length < max_length_of_textContent_to_use_as_summary
    )
      article.summary = article.textContent;
    // if there is no summary but there is an excerpt, then use the excerpt as the summary
    if (article.summary === undefined && article.excerpt !== undefined)
      article.summary = article.excerpt;
    // if there is no excerpt but there is a summary, then use the summary as the exerpt
    if (article.summary !== undefined && article.excerpt === undefined)
      article.excerpt = article.summary;

    if (article.tags !== undefined && article.tags.length === 0)
      article.tags = undefined;
    article.url = url;
    return article;
  } catch (e) {
    error(`Failed to fetch article: ${e}`);
    return null;
  }
}

/**
 * Transforms an article into a Markdown document.
 *
 * @param article The article to transform.
 * @returns The Markdown document as a string that corresponds to the input article.
 */
export async function extractMarkdownContent(
  article: Article,
): Promise<string> {
  const turndownService = new TurndownService({ headingStyle: "atx" });
  let markdownString = "";
  const metadata: string[] = [];

  function escape(s: string): string {
    return s.replace(/"/g, '\\"');
  }

  // populate metadata
  if (article.title) {
    metadata.push(`title: "${escape(article.title)}"`);
  }
  if (article.byline) {
    metadata.push(`author: "${escape(article.byline)}"`);
  }
  if (article.siteName) {
    metadata.push(`siteName: "${escape(article.siteName)}"`);
  }
  if (article.publishedTime) {
    metadata.push(`pubDate: "${article.publishedTime}"`);
  }
  if (article.lang) {
    metadata.push(`lang: "${escape(article.lang)}"`);
  }
  if (article.tags && article.tags.length > 0) {
    metadata.push(`tags: "${article.tags.join(", ")}"`);
  }

  // write metadata
  if (metadata.length > 0) {
    markdownString += `---\n${metadata.join("\n")}\n---\n\n`;
  }

  if (article.title) {
    markdownString += `# ${article.title}\n\n`;
  }

  if (article.content) {
    markdownString += turndownService.turndown(article.content);
  } else if (article.textContent) {
    markdownString += article.textContent;
  } else if (article.summary) {
    markdownString += article.summary;
  } else if (article.excerpt) {
    markdownString += article.excerpt;
  }

  return markdownString.trim();
}

/*
 * This file contains the implementation for the `fetchGithubReadme` function.
 *
 * The function accomplishes its goal by following these steps:
 * 1. It first attempts to parse the provided `url` string using the native `URL` constructor to extract the pathname.
 * 2. It splits the pathname (e.g., "/owner/repo") to isolate the repository owner and name.
 * 3. It constructs a URL for the official GitHub API endpoint that provides metadata for a repository's README file. Using this API endpoint is more robust than guessing the default branch name (e.g., "main" or "master") and the exact README filename (e.g., "README.md").
 * 4. It uses the `fetch` API to make a request to this GitHub API endpoint.
 * 5. If the API request is successful, it parses the JSON response to find the `download_url`, which is a direct link to the raw README file content.
 * 6. It then makes a second `fetch` request to this `download_url`.
 * 7. If this second request is successful, it reads the response body as plain text and returns it.
 * 8. The entire process is wrapped in a `try...catch` block. If any step fails (e.g., the URL is invalid, the repository doesn't exist, a network error occurs, or the repository has no README), the error is caught, and the function returns `null` as specified.
 */
export async function fetchGithubRepositoryReadme(
  url: string,
): Promise<string | null> {
  try {
    const urlParts = new URL(url).pathname.split("/").filter(Boolean);
    if (urlParts.length < 2) {
      return null;
    }
    const [owner, repo] = urlParts;

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}/readme`;

    const apiResponse = await fetch(apiUrl, {
      signal: AbortSignal.timeout(10000),
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!apiResponse.ok) {
      return null;
    }

    const readmeData = await apiResponse.json();
    const downloadUrl = readmeData.download_url;

    if (!downloadUrl) {
      return null;
    }

    const contentResponse = await fetch(downloadUrl, {
      signal: AbortSignal.timeout(10000),
    });

    if (!contentResponse.ok) {
      return null;
    }

    const markdownText = await contentResponse.text();
    return markdownText;
  } catch (e) {
    error(`Failed to fetch GitHub README: ${e}`);
    return null;
  }
}

export type GithubRepositoryData = {
  name: string;
  full_name: string;
  topics?: string[];
};

/**
 * Fetches the {@link GithubRepositoryData} for the Github repository at the given URL.
 *
 * @param url
 * @returns The fetched {@link GithubRepositoryData} or null if the fetch fails.
 */
export async function fetchGithubRepositoryData(
  url: string,
): Promise<GithubRepositoryData | null> {
  try {
    const urlParts = new URL(url).pathname.split("/").filter(Boolean);
    if (urlParts.length < 2) {
      return null;
    }
    const [owner, repo] = urlParts;

    const apiUrl = `https://api.github.com/repos/${owner}/${repo}`;

    const apiResponse = await fetch(apiUrl, {
      signal: AbortSignal.timeout(10000),
      headers: {
        Accept: "application/vnd.github.v3+json",
      },
    });

    if (!apiResponse.ok) {
      return null;
    }
    const repoData = await apiResponse.json();
    return repoData;
  } catch (e) {
    error(`Failed to fetch GitHub repository data: ${e}`);
    return null;
  }
}

/*
 * This file contains the implementation for the `fetchArxivArticleData` function.
 * The primary goal of this function is to accept a URL pointing to an ArXiv article's
 * abstract or PDF page, retrieve the article's metadata from the official ArXiv API,
 * and then parse that data into a structured `ArxivArticle` object.
 *
 * The process is as follows:
 * 1.  URL Parsing: The function first extracts the unique article ID from the input URL.
 * It uses a regular expression to robustly handle different URL formats, such as
 * those ending in `/abs/`, `/pdf/`, and with or without a version number (e.g., v1).
 * 2.  API Request: Once the ID is isolated, it constructs a query URL for the ArXiv API.
 * This API is designed for programmatic access to its database and returns data in
 * an XML (Atom) format.
 * 3.  Data Fetching: The native `fetch` API is used to make a network request to the
 * ArXiv API endpoint. It awaits the response and checks for any network or server errors.
 * 4.  XML Parsing: The raw XML text from the response is parsed into a navigable DOM
 * structure using the browser's built-in `DOMParser`. This avoids the need for
 * external libraries.
 * 5.  Data Extraction: The code traverses the parsed XML DOM to find the specific tags
 * containing the required information (id, title, summary, authors, etc.). It uses
 * `querySelector` for single elements and `querySelectorAll` to gather lists like
 * authors and categories.
 * 6.  Object Creation: The extracted string values are cleaned up (e.g., trimming whitespace)
 * and assembled into the final `ArxivArticle` object, conforming to the specified type.
 * 7.  Error Handling: A comprehensive try-catch block wraps the entire process. If any
 * step fails—be it an invalid URL, a network error, a parsing issue, or missing data
 * in the API response—the function will catch the error and return `null`, as
 * required by its signature.
 */
export type ArxivArticle = {
  id: string;
  /**
   * link to the abstract of the article
   */
  url: string;
  title: string;
  summary: string;
  authors: string[];
  publishedDate: string;
  updatedDate: string;
  /**
   * human-readable category names
   */
  categories: string[];
};

/**
 * Fetches the {@link ArxivArticle} for the ArXiv article at the given URL.
 *
 * @param url The URL of an ArXiv article to either its PDF (e.g. https://arxiv.org/pdf/2508.09222) or abstract (e.g. https://arxiv.org/abs/2508.09222)
 * @returns The fetched {@link ArxivArticle} or null if the fetch fails.
 */
export async function fetchArxivArticleData(
  url: string,
): Promise<ArxivArticle | null> {
  try {
    const articleIdMatch = url.match(/(\d{4}\.\d{4,5}(v\d+)?)/);
    if (!articleIdMatch) {
      console.error("Could not parse ArXiv article ID from URL:", url);
      return null;
    }
    const articleId = articleIdMatch[1];

    const apiUrl = `https://export.arxiv.org/api/query?id_list=${articleId}`;

    const response = await fetch(apiUrl, {
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) {
      console.error(
        `Failed to fetch from ArXiv API. Status: ${response.status}`,
      );
      return null;
    }

    const xmlText = await response.text();
    const dom = new JSDOM(xmlText, { contentType: "text/xml" });
    const xmlDoc = dom.window.document;

    const entry = xmlDoc.querySelector("entry");
    if (!entry) {
      console.error("No <entry> tag found in ArXiv API response.");
      return null;
    }

    const getText = (selector: string): string => {
      const element = entry.querySelector(selector);
      return element?.textContent?.trim().replace(/\s+/g, " ") || "";
    };

    const getLink = (): string => {
      const linkElement = entry.querySelector('link[title="abstract"]');
      return linkElement?.getAttribute("href") || getText("id");
    };

    const getArray = (selector: string, attribute?: string): string[] => {
      try {
        const elements = entry.querySelectorAll(selector);
        return Array.from(elements)
          .map((el) => {
            if (attribute) {
              return el.getAttribute(attribute) || "";
            }
            return el.textContent?.trim() || "";
          })
          .filter(Boolean);
      } catch (e) {
        error(`Error getting array: ${e}`);
        return [];
      }
    };

    const article: ArxivArticle = {
      id: getText("id"),
      url: getLink(),
      title: getText("title"),
      summary: getText("summary"),
      authors: getArray("author name"),
      publishedDate: getText("published"),
      updatedDate: getText("updated"),
      categories: getArray("category", "term").map(
        (c) => ARXIV_CATEGORY_MAP[c.toLowerCase()] ?? c,
      ),
    };

    if (!article.id || !article.title) {
      console.error(
        "Essential article data (id, title) is missing from the parsed response.",
      );
      return null;
    }

    return article;
  } catch (error) {
    console.error(
      "An error occurred while fetching or parsing ArXiv data:",
      error,
    );
    return null;
  }
}

const ARXIV_CATEGORY_MAP: { [key: string]: string } = {
  ["cs.AI".toLowerCase()]: "Artificial Intelligence",
  ["cs.AR".toLowerCase()]: "Hardware Architecture",
  ["cs.CC".toLowerCase()]: "Computational Complexity",
  ["cs.CE".toLowerCase()]: "Computational Engineering, Finance, and Science",
  ["cs.CG".toLowerCase()]: "Computational Geometry",
  ["cs.CL".toLowerCase()]: "Computation and Language",
  ["cs.CR".toLowerCase()]: "Cryptography and Security",
  ["cs.CV".toLowerCase()]: "Computer Vision and Pattern Recognition",
  ["cs.CY".toLowerCase()]: "Computers and Society",
  ["cs.DB".toLowerCase()]: "Databases",
  ["cs.DC".toLowerCase()]: "Distributed, Parallel, and Cluster Computing",
  ["cs.DL".toLowerCase()]: "Digital Libraries",
  ["cs.DM".toLowerCase()]: "Discrete Mathematics",
  ["cs.DS".toLowerCase()]: "Data Structures and Algorithms",
  ["cs.ET".toLowerCase()]: "Emerging Technologies",
  ["cs.FL".toLowerCase()]: "Formal Languages and Automata Theory",
  ["cs.GL".toLowerCase()]: "General Literature",
  ["cs.GR".toLowerCase()]: "Graphics",
  ["cs.GT".toLowerCase()]: "Computer Science and Game Theory",
  ["cs.IR".toLowerCase()]: "Information Retrieval",
  ["cs.IT".toLowerCase()]: "Information Theory",
  ["cs.LG".toLowerCase()]: "Machine Learning",
  ["cs.LO".toLowerCase()]: "Logic in Computer Science",
  ["cs.MA".toLowerCase()]: "Multiagent Systems",
  ["cs.MM".toLowerCase()]: "Multimedia",
  ["cs.MS".toLowerCase()]: "Mathematical Software",
  ["cs.NA".toLowerCase()]: "Numerical Analysis",
  ["cs.NE".toLowerCase()]: "Neural and Evolutionary Computing",
  ["cs.NI".toLowerCase()]: "Networking and Internet Architecture",
  ["cs.OH".toLowerCase()]: "Other Computer Science",
  ["cs.OS".toLowerCase()]: "Operating Systems",
  ["cs.PF".toLowerCase()]: "Performance",
  ["cs.PL".toLowerCase()]: "Programming Languages",
  ["cs.RO".toLowerCase()]: "Robotics",
  ["cs.SC".toLowerCase()]: "Symbolic Computation",
  ["cs.SD".toLowerCase()]: "Sound",
  ["cs.SE".toLowerCase()]: "Software Engineering",
  ["cs.SI".toLowerCase()]: "Social and Information Networks",
  ["cs.SY".toLowerCase()]: "Systems and Control",
  ["econ.EM".toLowerCase()]: "Econometrics",
  ["eess.AS".toLowerCase()]: "Audio and Speech Processing",
  ["eess.IV".toLowerCase()]: "Image and Video Processing",
  ["eess.SP".toLowerCase()]: "Signal Processing",
  ["eess.SY".toLowerCase()]: "Systems and Control",
  ["math.AC".toLowerCase()]: "Commutative Algebra",
  ["math.AG".toLowerCase()]: "Algebraic Geometry",
  ["math.AP".toLowerCase()]: "Analysis of PDEs",
  ["math.AT".toLowerCase()]: "Algebraic Topology",
  ["math.CA".toLowerCase()]: "Classical Analysis and ODEs",
  ["math.CO".toLowerCase()]: "Combinatorics",
  ["math.CT".toLowerCase()]: "Category Theory",
  ["math.CV".toLowerCase()]: "Complex Variables",
  ["math.DG".toLowerCase()]: "Differential Geometry",
  ["math.DS".toLowerCase()]: "Dynamical Systems",
  ["math.FA".toLowerCase()]: "Functional Analysis",
  ["math.GM".toLowerCase()]: "General Mathematics",
  ["math.GN".toLowerCase()]: "General Topology",
  ["math.GR".toLowerCase()]: "Group Theory",
  ["math.GT".toLowerCase()]: "Geometric Topology",
  ["math.HO".toLowerCase()]: "History and Overview",
  ["math.IT".toLowerCase()]: "Information Theory",
  ["math.KT".toLowerCase()]: "K-Theory and Homology",
  ["math.LO".toLowerCase()]: "Logic",
  ["math.MG".toLowerCase()]: "Metric Geometry",
  ["math.MP".toLowerCase()]: "Mathematical Physics",
  ["math.NA".toLowerCase()]: "Numerical Analysis",
  ["math.NT".toLowerCase()]: "Number Theory",
  ["math.OA".toLowerCase()]: "Operator Algebras",
  ["math.OC".toLowerCase()]: "Optimization and Control",
  ["math.PR".toLowerCase()]: "Probability",
  ["math.QA".toLowerCase()]: "Quantum Algebra",
  ["math.RA".toLowerCase()]: "Rings and Algebras",
  ["math.RT".toLowerCase()]: "Representation Theory",
  ["math.SG".toLowerCase()]: "Symplectic Geometry",
  ["math.SP".toLowerCase()]: "Spectral Theory",
  ["math.ST".toLowerCase()]: "Statistics Theory",
  ["astro-ph.CO".toLowerCase()]: "Cosmology and Nongalactic Astrophysics",
  ["astro-ph.EP".toLowerCase()]: "Earth and Planetary Astrophysics",
  ["astro-ph.GA".toLowerCase()]: "Astrophysics of Galaxies",
  ["astro-ph.HE".toLowerCase()]: "High Energy Astrophysical Phenomena",
  ["astro-ph.IM".toLowerCase()]: "Instrumentation and Methods for Astrophysics",
  ["astro-ph.SR".toLowerCase()]: "Solar and Stellar Astrophysics",
  ["cond-mat.dis-nn".toLowerCase()]: "Disordered Systems and Neural Networks",
  ["cond-mat.mes-hall".toLowerCase()]: "Mesoscale and Nanoscale Physics",
  ["cond-mat.mtrl-sci".toLowerCase()]: "Materials Science",
  ["cond-mat.other".toLowerCase()]: "Other Condensed Matter",
  ["cond-mat.quant-gas".toLowerCase()]: "Quantum Gases",
  ["cond-mat.soft".toLowerCase()]: "Soft Condensed Matter",
  ["cond-mat.stat-mech".toLowerCase()]: "Statistical Mechanics",
  ["cond-mat.str-el".toLowerCase()]: "Strongly Correlated Electrons",
  ["cond-mat.supr-con".toLowerCase()]: "Superconductivity",
  ["gr-qc".toLowerCase()]: "General Relativity and Quantum Cosmology",
  ["hep-ex".toLowerCase()]: "High Energy Physics - Experiment",
  ["hep-lat".toLowerCase()]: "High Energy Physics - Lattice",
  ["hep-ph".toLowerCase()]: "High Energy Physics - Phenomenology",
  ["hep-th".toLowerCase()]: "High Energy Physics - Theory",
  ["math-ph".toLowerCase()]: "Mathematical Physics",
  ["nlin.AO".toLowerCase()]: "Adaptation and Self-Organizing Systems",
  ["nlin.CD".toLowerCase()]: "Chaotic Dynamics",
  ["nlin.CG".toLowerCase()]: "Cellular Automata and Lattice Gases",
  ["nlin.PS".toLowerCase()]: "Pattern Formation and Solitons",
  ["nlin.SI".toLowerCase()]: "Exactly Solvable and Integrable Systems",
  ["nucl-ex".toLowerCase()]: "Nuclear Experiment",
  ["nucl-th".toLowerCase()]: "Nuclear Theory",
  ["physics.acc-ph".toLowerCase()]: "Accelerator Physics",
  ["physics.ao-ph".toLowerCase()]: "Atmospheric and Oceanic Physics",
  ["physics.app-ph".toLowerCase()]: "Applied Physics",
  ["physics.atm-clus".toLowerCase()]: "Atomic and Molecular Clusters",
  ["physics.atom-ph".toLowerCase()]: "Atomic Physics",
  ["physics.bio-ph".toLowerCase()]: "Biological Physics",
  ["physics.chem-ph".toLowerCase()]: "Chemical Physics",
  ["physics.class-ph".toLowerCase()]: "Classical Physics",
  ["physics.comp-ph".toLowerCase()]: "Computational Physics",
  ["physics.data-an".toLowerCase()]:
    "Data Analysis, Statistics and Probability",
  ["physics.flu-dyn".toLowerCase()]: "Fluid Dynamics",
  ["physics.gen-ph".toLowerCase()]: "General Physics",
  ["physics.geo-ph".toLowerCase()]: "Geophysics",
  ["physics.hist-ph".toLowerCase()]: "History and Philosophy of Physics",
  ["physics.ins-det".toLowerCase()]: "Instrumentation and Detectors",
  ["physics.med-ph".toLowerCase()]: "Medical Physics",
  ["physics.optics".toLowerCase()]: "Optics",
  ["physics.ed-ph".toLowerCase()]: "Physics Education",
  ["physics.plasm-ph".toLowerCase()]: "Plasma Physics",
  ["physics.pop-ph".toLowerCase()]: "Popular Physics",
  ["physics.soc-ph".toLowerCase()]: "Physics and Society",
  ["physics.space-ph".toLowerCase()]: "Space Physics",
  ["quant-ph".toLowerCase()]: "Quantum Physics",
  ["q-bio.BM".toLowerCase()]: "Biomolecules",
  ["q-bio.CB".toLowerCase()]: "Cell Behavior",
  ["q-bio.GN".toLowerCase()]: "Genomics",
  ["q-bio.MN".toLowerCase()]: "Molecular Networks",
  ["q-bio.NC".toLowerCase()]: "Neurons and Cognition",
  ["q-bio.OT".toLowerCase()]: "Other Quantitative Biology",
  ["q-bio.PE".toLowerCase()]: "Populations and Evolution",
  ["q-bio.QM".toLowerCase()]: "Quantitative Methods",
  ["q-bio.SC".toLowerCase()]: "Subcellular Processes",
  ["q-bio.TO".toLowerCase()]: "Tissues and Organs",
  ["q-fin.CP".toLowerCase()]: "Computational Finance",
  ["q-fin.EC".toLowerCase()]: "Economics",
  ["q-fin.GN".toLowerCase()]: "General Finance",
  ["q-fin.MF".toLowerCase()]: "Mathematical Finance",
  ["q-fin.PM".toLowerCase()]: "Portfolio Management",
  ["q-fin.PR".toLowerCase()]: "Pricing of Securities",
  ["q-fin.RM".toLowerCase()]: "Risk Management",
  ["q-fin.ST".toLowerCase()]: "Statistical Finance",
  ["q-fin.TR".toLowerCase()]: "Trading and Market Microstructure",
  ["stat.AP".toLowerCase()]: "Applications",
  ["stat.CO".toLowerCase()]: "Computation",
  ["stat.ME".toLowerCase()]: "Methodology",
  ["stat.ML".toLowerCase()]: "Machine Learning",
  ["stat.OT".toLowerCase()]: "Other Statistics",
  ["stat.TH".toLowerCase()]: "Theory",
};

/**
 * Fetches the text content of a PDF file.
 *
 * @param url - The URL of the PDF file.
 * @returns A promise that resolves to the text content of the PDF file, or null if the request fails or the file is not a PDF file.
 */
export async function fetchPdfText(url: string): Promise<PdfData | null> {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });

    if (!response.ok) {
      console.error(`HTTP error! status: ${response.status} for URL: ${url}`);
      return null;
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/pdf")) {
      console.error(
        `Invalid content type: ${contentType} for URL: ${url}. Expected application/pdf.`,
      );
      return null;
    }

    const arrayBuffer = await response.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const data = await PdfData.extract(buffer, {
      verbosity: VerbosityLevel.ERRORS,
    });

    return data;
  } catch (error) {
    console.error(`Failed to fetch or parse PDF from ${url}:`, error);
    return null;
  }
}
