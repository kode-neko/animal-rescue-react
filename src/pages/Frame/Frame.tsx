import React from 'react';
import { Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MainBar } from '../../components/MainBar';

const Frame = () => (
  <Container maxWidth="md">
    <MainBar />
    <Box sx={{ mt: 15 }}>
      <Outlet />
    </Box>
  </Container>
);

export default Frame;
