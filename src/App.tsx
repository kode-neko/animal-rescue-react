import React, { useMemo } from 'react';
import {
  createTheme,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { Theme } from './common/model';
import { RootState } from './common/store/store';
import router from './common/router';


declare module '@mui/material/ToggleButtonGroup' {
  interface ToggleButtonPropsVariantOverrides {
    mainbar: false;
  }
}

export default function App() {
  const theme = useSelector((state:RootState) => state.user.theme);
  const themeMUI = useMemo(
    () => (createTheme({
      palette: {
        mode: theme === Theme.DARK ? Theme.DARK : Theme.LIGHT,
      }
    })),
    [theme],
  );
  return (
    <ThemeProvider theme={themeMUI}>
      <CssBaseline />
      <SnackbarProvider anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
        <RouterProvider router={router} />
      </SnackbarProvider>
    </ThemeProvider>
  );
}
