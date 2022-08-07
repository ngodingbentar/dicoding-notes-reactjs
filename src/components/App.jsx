/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { getInitialData } from '../utils';
import NoteNavbar from './NoteNavbar';
import NoteBody from './NoteBody';

function App() {
  const [notes, setNotes] = useState(getInitialData);
  const [searchValue, setSearchValue] = useState('');

  const doAddNoteHandler = (value) => {
    const newNotes = [
      ...notes,
      {
        id: +new Date(),
        title: value.title,
        body: value.body,
        createdAt: value.createdAt,
        background: value.background,
        archived: false
      }
    ];
    setNotes(newNotes);
  };

  const doDeleteHandler = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
  };

  const doArchiveHandler = (id) => {
    const findNote = notes.find((note) => note.id === id);
    const newNotes = notes.map((oldNote) =>
      oldNote.id === findNote.id
        ? { ...oldNote, archived: oldNote.archived === true ? false : true }
        : oldNote
    );
    setNotes(newNotes);
  };

  const doSearch = (value) => {
    const filteredKeyword = value.toLowerCase().replace(/\s+/g, '');
    setSearchValue(filteredKeyword);
  };

  return (
    <>
      <NoteNavbar doSearch={doSearch} />
      <NoteBody
        notes={notes}
        doDelete={doDeleteHandler}
        doArchive={doArchiveHandler}
        addNote={doAddNoteHandler}
        searchValue={searchValue}
      />
    </>
  );
}

export default App;
