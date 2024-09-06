import React, { useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, TextField, Modal, Box, Button, CardMedia } from '@mui/material';

function Collection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [open, setOpen] = useState(false);

  const books = [
    {
      id: 1,
      title: 'Brave New World',
      author: 'Aldous Huxley',
      description: 'A dystopian novel set in a futuristic world where society is highly controlled. Individual freedom and identity are sacrificed for stability, exploring themes of technology, power, and human nature.',
      image: require('../Media/bravenewworld.png')
    },
    {
      id: 2,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
      description: 'A novel about teenage alienation and rebellion, narrated by Holden Caulfield as he navigates life in New York City after being expelled from prep school, exploring identity, loss, and innocence.',
      image: require('../Media/catcher.png')
    },
    {
      id: 3,
      title: 'The Picture of Dorian Gray',
      author: 'Oscar Wilde',
      description: 'The story of Dorian Gray, a handsome young man who remains youthful while his portrait ages and reflects the corruption of his soul as he pursues a life of hedonism and moral decay.',
      image: require('../Media/dorian gray.png')
    },
    {
      id: 4,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      description: 'Set in the 1930s American South, the novel tells the story of racial injustice through the eyes of young Scout Finch, with themes of prejudice, moral growth, and the loss of innocence.',
      image: require('../Media/mockingbird.png')
    },
    {
      id: 5,
      title: 'Pride and Prejudice',
      author: 'Jane Austen',
      description: 'A classic romance novel that revolves around Elizabeth Bennet and Mr. Darcy, critiquing social class, marriage, and individual pride and prejudice with witty social commentary and romantic drama.',
      image: require('../Media/pride.png')
    },
    {
      id: 6,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
      description: 'Set in the Jazz Age of 1920s America, this novel tells the tragic story of Jay Gatsby and his obsession with Daisy Buchanan, exploring wealth, love, the American Dream, and moral decay.',
      image: require('../Media/The great gatsby.png')
    },
    {
      id: 7,
      title: 'The Hobbit',
      author: 'J.R.R. Tolkien',
      description: 'A fantasy adventure that follows Bilbo Baggins as he embarks on a quest with dwarves to reclaim their homeland from the dragon Smaug, discovering bravery and encountering magical creatures.',
      image: require('../Media/The Hobbit.png')
    },
    {
      id: 8,
      title: 'The Odyssey',
      author: 'Homer',
      description: 'An epic poem about Odysseus’ journey home after the Trojan War, facing mythical creatures, gods, and immense challenges, while his family struggles back in Ithaca.',
      image: require('../Media/The odessey.png')
    }
  ];
  

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

  // Filter books by search term (title or author)
  const filteredBooks = books.filter((book) =>
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
                {/* Display book cover image */}
                <CardMedia
                  component="img"
                  height="200"
                  image={book.image}
                  alt={book.title}
                />
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
