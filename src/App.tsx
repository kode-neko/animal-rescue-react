import React, { useMemo } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector } from 'react-redux';
import { Theme } from './common/model';
import { RootState } from './common/store/store';
import { Master } from './pages';

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
      <Master />
    </ThemeProvider>
  );
}
