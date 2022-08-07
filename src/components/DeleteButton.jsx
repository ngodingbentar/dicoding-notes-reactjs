/* eslint-disable react/prop-types */
import React from 'react';
import Button from 'react-bootstrap/Button';

function DeleteButton({ id, doDelete }) {
  return (
    <Button variant="danger" onClick={() => doDelete(id)}>
      Hapus
    </Button>
  );
}

export default DeleteButton;
