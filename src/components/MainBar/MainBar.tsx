import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import { MainDrawer } from './MainDrawer';
import { title } from '../../common/constants';
import { SwitchTheme } from '../SwitchTheme';
import { SwitchLang } from '../SwitchLang';

const MainBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setIsOpen(!isOpen);
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <SwitchTheme />
            <SwitchLang />
          </Box>
        </Toolbar>
      </AppBar>
      <MainDrawer
        isOpen={isOpen}
        handleDrawerClose={handleDrawerToggle}
      />
    </Box>
  );
};

export default MainBar;
