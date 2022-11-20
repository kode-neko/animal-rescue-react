import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShareIcon from '@mui/icons-material/Share';
import { MainDrawer } from './MainDrawer';
import { title } from '../../common/constants';
import { SwitchTheme } from '../SwitchTheme';
import { SwitchLang } from '../SwitchLang';

const MainBar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenRRSS, setIsOpenRRSS] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [lang, setLang] = useState<string>('es');
  const handleDrawerToggle = () => setIsOpen(!isOpen);
  // setAnchorEl(event.currentTarget);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {};
  // const handleClose = () => setAnchorEl(null);
  const handleClose = () => {};

  const [anchorElRRSS, setAnchorElRRSS] = React.useState<null | HTMLElement>(null);
  const openRRSS = Boolean(anchorElRRSS);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRRSS(event.currentTarget);
  };
  const handleMenuCloseRRSS = () => {
    setAnchorElRRSS(null);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorElRRSS}
      id="menuSocial"
      keepMounted
      open={openRRSS}
      onClose={handleMenuCloseRRSS}
    >
      <MenuItem onClick={handleMenuCloseRRSS}>Profile</MenuItem>
      <MenuItem onClick={handleMenuCloseRRSS}>My account</MenuItem>
    </Menu>
  );

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
            sx={{ flexGrow: 1 }}
          >
            {title}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '6px' } }}>
            <IconButton
              size="large"
              edge="end"
              aria-label="create new animal"
              aria-controls="add"
              aria-haspopup="true"
              sx={{ color: 'white' }}
            >
              <AddCircleIcon />
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="watch social media"
              aria-controls="social"
              sx={{ color: 'white', marginRight: '4px' }}
              onClick={handleProfileMenuOpen}
            >
              <ShareIcon />
            </IconButton>
            {renderMenu}
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
