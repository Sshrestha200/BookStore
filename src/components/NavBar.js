import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import BookIcon from '@mui/icons-material/Book';

function NavBar({ user, signOut }) {
  return (
    <AppBar position="static" color="default">
      <Toolbar>
        <BookIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          BookStore
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/collection">Collection</Button>
        <Button color="inherit" component={Link} to="/contact">Contact</Button>
        
        {user ? (
          <>
            <Typography variant="body2" sx={{ marginRight: 2 }}>
              Hello, {user.username}
            </Typography>
            <Button color="inherit" onClick={signOut}>
              Logout
            </Button>
          </>
        ) : null}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
