/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';

function NoteNavbar(props) {
  const [keyword, setKeyword] = useState('');

  const onChangeHandler = (event) => {
    setKeyword(event.target.value);
    props.doSearch(event.target.value);
  };
  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">CatatanKu</Navbar.Brand>
        <Form className="d-flex">
          <Form.Control
            type="search"
            value={keyword}
            placeholder="Cari..."
            className="me-2"
            aria-label="Search"
            onChange={() => onChangeHandler(event)}
          />
        </Form>
      </Container>
    </Navbar>
  );
}

export default NoteNavbar;
