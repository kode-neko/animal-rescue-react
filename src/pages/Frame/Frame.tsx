import React from 'react';
import { Container, Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { MainBar } from '../../components/MainBar';

const Frame = () => (
  <Container>
    <MainBar />
    <Box sx={{ mt: 10 }}>
      <Outlet />
    </Box>
  </Container>
);

export default Frame;
