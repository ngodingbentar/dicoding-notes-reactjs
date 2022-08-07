/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function NoteAddModal(props) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [createdAt, setCreatedAt] = useState('');
  const [background, setBackground] = useState('');
  const [charsLeft, setCharsLeft] = useState(50);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const changeTitle = (event) => {
    if (event.target.value.length <= 50) {
      setCharsLeft(50 - event.target.value.length);
      setTitle(event.target.value);
      const bg = selectBackkground();
      setCreatedAt(new Date().toISOString());
      setBackground(bg);
    }
  };

  const onSubmitHandler = () => {
    props.addNote({ title, body, createdAt, background });
    setTitle('');
    handleClose();
  };

  const selectBackkground = () => {
    const min = 1;
    const max = 6;
    var randomnumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (randomnumber === 1) {
      return '#f3a683';
    } else if (randomnumber === 2) {
      return '#f5cd79';
    } else if (randomnumber === 3) {
      return '#778beb';
    } else if (randomnumber === 4) {
      return '#e77f67';
    } else if (randomnumber === 5) {
      return '#786fa6';
    } else {
      return '#f8a5c2';
    }
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Tambah Catatan
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Menambahkan catatan</Modal.Title>
        </Modal.Header>
        <p>Sisa Karakter Judul = {charsLeft}</p>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Judul</Form.Label>
              <Form.Control
                type="text"
                placeholder="judul"
                value={title}
                autoFocus
                onChange={() => changeTitle(event)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Catatan</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={() => setBody(event.target.value)} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Batal
          </Button>
          <Button variant="primary" onClick={onSubmitHandler}>
            Tambah
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NoteAddModal;
