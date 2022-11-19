import React from 'react';
import { Switch, Box, FormControlLabel } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, setLang } from '../../common/store';
import { ThemeMode } from '../../common/model';
import { setTheme } from '../../common/store/actions';

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.user.theme);
  const handleSwitch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const themeNew = value === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
    dispatch(setTheme({ theme: themeNew }));
  };
  return (
    <Box display='flex'>
      <FormControlLabel
        control={<Switch defaultChecked color="default" />}
        value={theme}
        label={ theme === ThemeMode.DARK ? <DarkModeIcon fontSize='medium'/> : <LightModeIcon fontSize='medium'/>}
        onChange={(e) => handleSwitch(e as React.ChangeEvent<HTMLInputElement>)}
      />
      { /* <LanguageIcon fontSize='medium'/> */}
    </Box>
  );
};

export default SwitchTheme;
