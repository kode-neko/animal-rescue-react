import React from 'react';
import { Container, Box, Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { MainBar, Footer } from '../../components';

const Frame = () => {
  const animalGetList = useSelector((state:RootState) => state.app.animalGetList);
  return (
    <Container maxWidth="md" sx={{ py: 15 }}>
      <MainBar />
      <Backdrop open={animalGetList}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ mb: 5 }}>
        <Outlet />
      </Box>
      <Footer />
    </Container>
  );
};

export default Frame;
