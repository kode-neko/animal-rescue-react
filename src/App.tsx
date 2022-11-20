import React, { useMemo } from 'react';
import {
  createTheme, CssBaseline, Container, Box,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Outlet, RouterProvider } from 'react-router-dom';
import { Theme } from './common/model';
import { RootState } from './common/store/store';
import router from './common/router';
import { MainBar } from './components/MainBar';

export default function App() {
  const theme = useSelector((state:RootState) => state.user.theme);
  const themeMUI = useMemo(
    () => (createTheme({
      palette: {
        mode: theme === Theme.DARK ? Theme.DARK : Theme.LIGHT,
      },
    })),
    [theme],
  );
  return (
    <ThemeProvider theme={themeMUI}>
        <CssBaseline />
        <RouterProvider router={router} />
    </ThemeProvider>
  );
}
