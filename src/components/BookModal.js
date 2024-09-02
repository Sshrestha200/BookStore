import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { PDFDownloadLink, Document, Page } from 'react-pdf';

function BookModal({ show, handleClose, book }) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{book?.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{book?.description}</p>
        <PDFDownloadLink document={<MyDoc />} fileName="sample.pdf">
          {({ blob, url, loading, error }) =>
            loading ? 'Loading document...' : 'Download PDF'
          }
        </PDFDownloadLink>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

const MyDoc = () => (
  <Document>
    <Page pageNumber={1} />
  </Document>
);

export default BookModal;
