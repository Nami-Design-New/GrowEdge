import { useState } from "react";

export default function NotesCard({ notes: initialNotes }) {
  const [notes, setNotes] = useState(initialNotes || []);
  const [newNote, setNewNote] = useState("");

  const handleAddNote = () => {
    if (newNote.trim() === "") return;
    setNotes([...notes, newNote]);
    setNewNote("");
  };

  return (
    <div className="card-box notes-card">
      <h6 className="fw-bold mb-3">Session Notes</h6>

      <div className="notes-list">
        {notes.length > 0 ? (
          notes.map((note, i) => (
            <div key={i} className="note-item small">
              <i className="fa-regular fa-comment-dots me-2"></i>
              {note}
            </div>
          ))
        ) : (
          <p className="no-notes text-muted small">No notes yet</p>
        )}
      </div>

      <div className="add-note mt-3">
        <textarea
          className="form-control"
          rows="3"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Add a new note about this client..."
        ></textarea>
        <button onClick={handleAddNote} className="btn btn-primary mt-3 w-100">
          <i className="fa-solid fa-plus me-2"></i> Add Note
        </button>
      </div>
    </div>
  );
}
