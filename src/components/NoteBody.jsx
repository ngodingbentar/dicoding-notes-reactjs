/* eslint-disable react/prop-types */
import React from 'react';
import NotesActive from './NotesActive';
import NotesArchive from './NotesArchive';
import NoteAddModal from './NoteAddModal';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

function NoteBody({ notes, doDelete, doArchive, addNote, searchValue }) {
  return (
    <main>
      <div className="mt-3">
        <NoteAddModal addNote={addNote} />
      </div>
      <div>
        <Tabs defaultActiveKey="aktif" className="my-3">
          <Tab eventKey="aktif" title="Aktif">
            <NotesActive
              notes={notes}
              doDelete={doDelete}
              doArchive={doArchive}
              searchValue={searchValue}
            />
          </Tab>
          <Tab eventKey="arsip" title="Arsip">
            <NotesArchive
              notes={notes}
              doDelete={doDelete}
              doArchive={doArchive}
              searchValue={searchValue}
            />
          </Tab>
        </Tabs>
      </div>
    </main>
  );
}

export default NoteBody;
