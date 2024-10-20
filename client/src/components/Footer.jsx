import React from 'react';
import { Container, Typography, Box, Link } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        color: 'white',
        py: 3,
        mt: 'auto',
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          © {new Date().getFullYear()} Prometheus, Jake and Daniel. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" align="center">
            <Link href="/terms" color="inherit">
              Terms of Service
            </Link>
            {' | '}
            <Link href="/privacy" color="inherit">
              Privacy Policy
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};