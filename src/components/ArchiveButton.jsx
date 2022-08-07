import React from 'react';
import Button from 'react-bootstrap/Button';

function ArchiveButton({ id, doArchive, archived }) {
  const button = () => {
    if (!archived) {
      return (
        <Button variant="secondary" onClick={() => doArchive(id)}>
          Arsipkan
        </Button>
      );
    } else {
      return (
        <Button variant="primary" onClick={() => doArchive(id)}>
          Pindahkan
        </Button>
      );
    }
  };

  return button();
}

export default ArchiveButton;
