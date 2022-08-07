/* eslint-disable react/prop-types */
import React from 'react';
import NoteItem from './NoteItem';

function NotesActive({ notes, doDelete, doArchive, searchValue }) {
  const filteredNotes = notes.filter(
    (note) => !note.archived && note.title.toLowerCase().replace(/\s+/g, '').includes(searchValue)
  );

  const NotesActive =
    filteredNotes.length > 0 ? (
      <div className="container">
        {filteredNotes.map((note) => (
          <NoteItem
            key={note.id}
            id={note.id}
            title={note.title}
            body={note.body}
            background={note.background}
            date={note.createdAt}
            archived={note.archived}
            doDelete={doDelete}
            doArchive={doArchive}
          />
        ))}
      </div>
    ) : (
      <h3 className="notes-list__empty-message">Tidak Ada Catatan</h3>
    );

  return <div>{NotesActive}</div>;
}

export default NotesActive;
