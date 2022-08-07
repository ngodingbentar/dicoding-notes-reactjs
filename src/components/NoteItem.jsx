/* eslint-disable react/prop-types */
import React from 'react';
import { showFormattedDate } from '../utils';
import ArchiveButton from './ArchiveButton';
import DeleteButton from './DeleteButton';

function NoteItem({ id, doArchive, doDelete, title, date, body, archived, background }) {
  return (
    <div className="box" style={{ backgroundColor: background }}>
      <div>
        <h3 className="card-title">{title}</h3>
        <p>{showFormattedDate(date)}</p>
      </div>
      <p className="card-body">{body}</p>
      <div className="card-action">
        <ArchiveButton id={id} doArchive={doArchive} archived={archived} />
        <DeleteButton id={id} doDelete={doDelete} />
      </div>
    </div>
  );
}

export default NoteItem;
