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
        {notes.map((note) => (
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
      <div className="url">
        <a href={props.note.url}>{props.note.url}</a>
      </div>
      <div className="date">{props.note.date}</div>
      {props.note.abstract !== undefined ? (
        <div className="abstract">{props.note.abstract}</div>
      ) : (
        <></>
      )}
      {props.note.tags !== undefined ? (
        <div className="tags">
          {props.note.tags.map((tag) => (
            <TagView tag={tag} />
          ))}
        </div>
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
