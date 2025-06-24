import "@/App.css";
import { fetchNotes } from "@/fetch" with { type: "macro" };
import { Note } from "@/ontology";
import "@/favicon.ico";
import { encodeURIComponent_better } from "@/utility";

export default function App() {
  // @ts-ignore
  const notes: Note[] = fetchNotes();

  return (
    <div className="App">
      <Header />
      <main className="notes">
        {notes
          .toSorted((n1, n2) => Date.parse(n2.date) - Date.parse(n1.date))
          .map((note) => (
            <NoteView key={note.url} note={note} />
          ))}
      </main>
    </div>
  );
}

function Header() {
  return (
    <header className="Header">
      <div className="title">url-notes</div>
    </header>
  );
}

const LinkIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    stroke-width="2"
    stroke-linecap="round"
    stroke-linejoin="round"
    className="icon lucide lucide-link-icon lucide-link"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

function NoteView(props: { note: Note }) {
  const id = encodeURIComponent_better(props.note.url);
  return (
    <div id={id} className="Note">
      <div className="name">
        <img src={props.note.faviconUrl} alt="" className="icon favicon" />
        {props.note.name !== undefined ? (
          <a href={props.note.url} className="label">
            {props.note.name}
          </a>
        ) : (
          <a href={props.note.url} className="label raw">
            {props.note.url}
          </a>
        )}
        <a href={`#${id}`} className="id-link">
          {LinkIcon}
        </a>
      </div>
      <div className="date">added: {props.note.date}</div>
      {props.note.tags !== undefined ? (
        <div className="tags">
          {props.note.tags.map((tag) => (
            <TagView tag={tag} />
          ))}
        </div>
      ) : (
        <></>
      )}
      {props.note.abstract !== undefined ? (
        <div className="abstract">{props.note.abstract}</div>
      ) : (
        <></>
      )}
    </div>
  );
}

function TagView(props: { tag: string }) {
  return (
    <div className="Tag">
      <a href={`#${props.tag}`}>{props.tag}</a>
    </div>
  );
}
