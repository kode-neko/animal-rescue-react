import React from 'react';
import { Container, Box, Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { MainBar, Footer } from '../../components';

const Frame = () => {
  const {
    animalGetList, animalGet, animalPost, animalPut, animalDelete,
  } = useSelector((state:RootState) => state.app);
  return (
    <Box sx={{ py: 15 }}>
      <MainBar />
      <Backdrop open={animalGetList || animalGet || animalPost || animalPut || animalDelete}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Container maxWidth="md" sx={{ mb: 5 }}>
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};

export default Frame;
