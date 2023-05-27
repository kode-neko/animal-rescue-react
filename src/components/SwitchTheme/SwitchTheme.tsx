import React from 'react';
import { Switch, Box, FormControlLabel } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../common/store/store';
import { Theme } from '../../common/model';
import { setTheme } from '../../common/store/action/user';
import styles from './SwitchTheme.module.scss'

const SwitchTheme = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.user.theme);
  const handleSwitch = async () => {
    const themeNew = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
    dispatch(setTheme({ theme: themeNew }));
  };
  return (
    <div className={styles.cont} onClick={handleSwitch}>
      <Switch defaultChecked color="default" />
      { theme === Theme.DARK ? <DarkModeIcon fontSize='medium'/> : <LightModeIcon fontSize='medium'/>}
    </div>
  );
};

export default SwitchTheme;
