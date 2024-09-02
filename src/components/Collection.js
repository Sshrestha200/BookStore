import React, { useState, useEffect } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Modal, Box, Button } from '@mui/material';
import axios from 'axios'; // Import axios for making HTTP requests

function Collection() {
  const [books, setBooks] = useState([]); // State to store the fetched books data
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Fetch books data from the API when the component mounts
    const fetchBooks = async () => {
      try {
        const response = await axios.get('https://your-api-gateway-endpoint.amazonaws.com/dev/books'); // Replace with your API endpoint
        setBooks(response.data);
      } catch (error) {
        console.error('Error fetching books:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCardClick = (book) => {
    setSelectedBook(book);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBook(null);
  };

  const filteredBooks = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Book Collection
        </Typography>
        <TextField
          label="Search by author or book name"
          variant="outlined"
          fullWidth
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mb: 4 }}
        />
        <Grid container spacing={4}>
          {filteredBooks.map((book) => (
            <Grid item xs={12} sm={6} md={4} key={book.id}>
              <Card onClick={() => handleCardClick(book)}>
                <CardContent>
                  <Typography variant="h6">
                    {book.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {book.author}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{ width: 400, bgcolor: 'background.paper', p: 4, m: 'auto', mt: 10, borderRadius: 1 }}>
            <Typography variant="h6" gutterBottom>
              {selectedBook?.title}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {selectedBook?.description}
            </Typography>
            <Button onClick={handleClose} sx={{ mt: 2 }} variant="contained" color="primary">
              Close
            </Button>
          </Box>
        </Modal>
      </Box>
    </Container>
  );
}

export default Collection;
