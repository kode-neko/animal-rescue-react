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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ShareIcon from '@mui/icons-material/Share';
import { useNavigate } from 'react-router-dom';
import PetsIcon from '@mui/icons-material/Pets';
import { MainDrawer } from './MainDrawer';
import { socialList, title } from '../../common/constants';
import { SwitchTheme } from '../SwitchTheme';
import { SwitchLang } from '../SwitchLang';
import Social from '../../common/model/Social';

const MainBar = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorElRRSS, setAnchorElRRSS] = React.useState<null | HTMLElement>(null);
  const openRRSS = Boolean(anchorElRRSS);

  const handleDrawerToggle = () => setIsOpen(!isOpen);
  const handleClickSocialBtn = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRRSS(event.currentTarget);
  };
  const handleMenuSocialClose = () => setAnchorElRRSS(null);
  const handleMenuSocialClickOpt = (social: Social) => window.open(social.url, '__blank');

  const renderMenu = (
    <Menu
      anchorEl={anchorElRRSS}
      id="menuSocial"
      keepMounted
      open={openRRSS}
      onClose={handleMenuSocialClose}
    >
      {socialList.map((social: Social) => (
        <MenuItem key={social.name} onClick={() => handleMenuSocialClickOpt(social)}>
          <Box sx={{ display: 'flex', gap: '6px' }}>
            <social.icon sx={{ marginRight: '6px' }} />{social.name}
          </Box>
        </MenuItem>
      ))}
    </Menu>
  );

  const optionsBar = (
    <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '6px' } }}>
      <IconButton
        size="large"
        edge="end"
        aria-label="create new animal"
        aria-controls="add"
        aria-haspopup="true"
        sx={{ color: 'white' }}
        onClick={() => navigate('/create')}
      >
        <AddCircleIcon />
      </IconButton>
      <IconButton
        size="large"
        edge="end"
        aria-label="watch social media"
        aria-controls="social"
        sx={{ color: 'white', marginRight: '4px' }}
        onClick={handleClickSocialBtn}
      >
        <ShareIcon />
      </IconButton>
      {renderMenu}
      <SwitchTheme />
      <SwitchLang />
    </Box>
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
          <PetsIcon sx={{ marginRight: '10px' }} />
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1, cursor: 'pointer' }}
            onClick={() => navigate('/')}
          >
            {title}
          </Typography>
          {optionsBar}
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
