import React from 'react';
import { Card } from 'react-bootstrap';

function BookCard({ book, onClick }) {
  return (
    <Card onClick={() => onClick(book)}>
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.author}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default BookCard;
