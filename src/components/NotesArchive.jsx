/* eslint-disable react/prop-types */
import React from 'react';
import NoteItem from './NoteItem';

function NotesArchive({ notes, doDelete, doArchive, searchValue }) {
  const filteredNotes = notes.filter(
    (note) => note.archived && note.title.toLowerCase().replace(/\s+/g, '').includes(searchValue)
  );

  const archivedNotes =
    filteredNotes.length > 0 ? (
      <div className="container">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            date={note.createdAt}
            body={note.body}
            archived={note.archived}
            doDelete={doDelete}
            doArchive={doArchive}
            background={note.background}
          />
        ))}
      </div>
    ) : (
      <h3 className="notes-list__empty-message">Arsip Kosong</h3>
    );

  return <div>{archivedNotes}</div>;
}

export default NotesArchive;
