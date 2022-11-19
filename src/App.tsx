import React, { useMemo } from 'react';
import { createTheme, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useSelector, Provider } from 'react-redux';
import { Theme } from './common/model';
import { RootState, store } from './common/store/store';

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
    <Provider store={store}>
      <ThemeProvider theme={themeMUI}>
        <CssBaseline />
        <div>
          <h1>Hello StackBlitz!</h1>
          <p>Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. </p>
        </div>
      </ThemeProvider>
    </Provider>
  );
}
