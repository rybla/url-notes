import "./App.css";
import getNotes from "./getNotes" with { type: "macro" };
import { Note } from "./ontology";

export default function App() {
  // @ts-ignore
  const notes: Note[] = getNotes();

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

function NoteView(props: { note: Note }) {
  return (
    <div className="Note">
      {props.note.name !== undefined ? (
        <div className="name">
          <a href={props.note.url}>{props.note.name}</a>
        </div>
      ) : (
        <div className="url">
          <a href={props.note.url}>{props.note.url}</a>
        </div>
      )}
      <div className="date">added on {props.note.date}</div>
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
