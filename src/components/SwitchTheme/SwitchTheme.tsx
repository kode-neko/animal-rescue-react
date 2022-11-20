import React from 'react';
import { Switch, Box, FormControlLabel } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { Theme } from '../../common/model';
import { setTheme } from '../../common/store/action/user';

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.user.theme);
  const handleSwitch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const themeNew = value === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    dispatch(setTheme({ theme: themeNew }));
  };
  return (
    <FormControlLabel
      control={<Switch defaultChecked color="default" />}
      value={theme}
      label={ theme === Theme.DARK ? <DarkModeIcon fontSize='medium'/> : <LightModeIcon fontSize='medium'/>}
      onChange={(e) => handleSwitch(e as React.ChangeEvent<HTMLInputElement>)}
    />
  );
};

export default SwitchTheme;
