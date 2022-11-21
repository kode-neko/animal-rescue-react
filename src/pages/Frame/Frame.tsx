import React from 'react';
import { Container, Box, Backdrop } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { MainBar } from '../../components/MainBar';
import { RootState } from '../../common/store/store';

const Frame = () => {
  const animalGetList = useSelector((state:RootState) => state.app.animalGetList);
  return (
    <Container maxWidth="md">
      <MainBar />
      <Backdrop open={animalGetList}>
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ mt: 15 }}>
        <Outlet />
      </Box>
    </Container>
  );
};

export default Frame;
