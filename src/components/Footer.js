import React from 'react';
import { Box, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
    component="footer"
    sx={{
      p: 2,
      backgroundColor: '#000',
      color: '#fff',
      textAlign: 'center',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      height: '10px', 

    }}
  >
      <Typography variant="body2">© 2024 BookStore. All Rights Reserved.</Typography>
    </Box>
  );
}

export default Footer;
