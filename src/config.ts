/**
 * Whether to skip all uses of AI.
 */
export const skip_ai = false;

/**
 * Maximum length of article content to include in input for summarization. If longer. content will be truncated.
 */
export const max_length_of_content_to_summarize = 5000; // characters

/**
 * Minimum length of summary provided by fetched article that is considered an actual summary. If shorter, then summary is just marked as missing.
 */
export const min_length_of_summary = 10; // characters

/**
 * If an article has no summary nor excerpt, thenn can use the textContent of the article as the summary only if it is shorter than this.
 */
export const max_length_of_textContent_to_use_as_summary = 1000; // characters

/**
 * Maximum length of article summary to include as input for tagging. If longer, will be truncated.
 */
export const max_length_of_summary_to_tag = 1000;
