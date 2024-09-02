import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent } from '@mui/material';
import { motion } from 'framer-motion';

function Home() {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <Container>
      <motion.div initial="hidden" animate="visible" variants={containerVariants}>
        <Box sx={{ mt: 4, mb: 4 }}>
          <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
            <Typography variant="h3" gutterBottom>
              Welcome to BookStore
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            <Typography variant="body1" gutterBottom>
              At BookStore, we believe in the power of stories and the magic of the written word. Our collection features an extensive range of books across all genres, handpicked to satisfy the tastes of every reader. Whether you're a fan of classic literature, modern fiction, or academic texts, you'll find something to love at BookStore.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our mission is to foster a love of reading and to make books accessible to everyone. We are more than just a bookstore; we are a community of book lovers, united by our passion for literature and our belief in its power to inspire, educate, and entertain.
            </Typography>
            <Typography variant="body1" gutterBottom>
              We invite you to explore our Collection page, where you'll find our carefully curated selection of books. Whether you're looking for the latest bestsellers, timeless classics, or hidden gems, our collection has something for everyone.
            </Typography>
          </motion.div>
        </Box>

        <motion.div initial="hidden" animate="visible" variants={containerVariants}>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Our Values
                    </Typography>
                    <Typography variant="body2">
                      At BookStore, we value diversity, inclusivity, and accessibility. We strive to ensure that our collection reflects a wide range of voices and perspectives. We believe that books have the power to change lives, and we are committed to making our store a place where everyone feels welcome and valued.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Our Services
                    </Typography>
                    <Typography variant="body2">
                      We offer a range of services to meet the needs of our customers, including book recommendations, special orders, and gift wrapping. Our knowledgeable staff is always on hand to help you find the perfect book, whether you're shopping for yourself or searching for the perfect gift.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Book Club
                    </Typography>
                    <Typography variant="body2">
                      Join our Book Club and connect with other readers in our community. Each month, we select a book to read and discuss, bringing people together to share their thoughts, insights, and love of literature. Membership is free and open to everyone.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Author Events
                    </Typography>
                    <Typography variant="body2">
                      We regularly host author events, including book signings, readings, and Q&A sessions. These events offer a unique opportunity to meet your favorite authors, discover new writers, and gain deeper insights into the books you love.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Children's Corner
                    </Typography>
                    <Typography variant="body2">
                      Our Children's Corner is a special space dedicated to our youngest readers. Here, you'll find a wide selection of children's books, from picture books to young adult novels. We also offer storytelling sessions, craft activities, and more, making it a great place for kids to discover the joy of reading.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <motion.div variants={cardVariants}>
                <Card
                  sx={{
                    transition: 'transform 0.3s',
                    '&:hover': { transform: 'scale(1.05)' },
                  }}
                >
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      Gift Cards
                    </Typography>
                    <Typography variant="body2">
                      Looking for the perfect gift? Our gift cards are a great choice for any book lover. Available in a range of denominations, our gift cards can be used to purchase any item in our store. Whether for birthdays, holidays, or just because, a BookStore gift card is always appreciated.
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          </Grid>
        </motion.div>

        <Box sx={{ mt: 6 }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
            <Typography variant="h4" gutterBottom>
              Why Choose BookStore?
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
            <Typography variant="body1" gutterBottom>
              At BookStore, we're passionate about books and dedicated to providing our customers with the best possible experience. Here are just a few reasons why you should choose us:
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}>
            <Typography variant="body1" component="ul" gutterBottom>
              <li>Wide Selection: We offer a diverse range of books across all genres, ensuring there's something for everyone.</li>
              <li>Expert Staff: Our knowledgeable and friendly staff are here to help you find exactly what you're looking for.</li>
              <li>Community Focused: We're more than just a bookstore—we're a community hub where readers can connect, share, and learn.</li>
              <li>Special Services: From book recommendations to gift wrapping, we go the extra mile to make your shopping experience enjoyable.</li>
              <li>Exclusive Events: Our author events and book club meetings offer unique opportunities to engage with the literary world.</li>
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.6 }}>
            <Typography variant="body1">
              We invite you to visit BookStore and experience the difference for yourself. Whether you're a lifelong book lover or just beginning your reading journey, we're here to support you every step of the way.
            </Typography>
          </motion.div>
        </Box>

        <Box sx={{ mt: 6, textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }}>
            <Typography variant="h4" gutterBottom>
              Visit Us Today!
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2 }}>
            <Typography variant="body1">
              Our store is located in the heart of NewCastle. We can't wait to welcome you!
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.4 }}>
            <Typography variant="body1" sx={{ mt: 2 }}>
              123 Darby Street, NewCastle, NSW
            </Typography>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.6 }}>
            <Typography variant="body1">
              Open Monday to Saturday, 9:00 AM to 6:00 PM
            </Typography>
          </motion.div>
        </Box>
      </motion.div>
    </Container>
  );
}

export default Home;
