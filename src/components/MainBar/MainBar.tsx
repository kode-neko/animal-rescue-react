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
import { useNavigate } from 'react-router-dom';
import { MainDrawer } from './MainDrawer';
import { socialList, title } from '../../common/constants';
import { SwitchTheme } from '../SwitchTheme';
import { SwitchLang } from '../SwitchLang';
import Social from '../../common/model/Social';

const MainBar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleDrawerToggle = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  const [anchorElRRSS, setAnchorElRRSS] = React.useState<null | HTMLElement>(null);
  const openRRSS = Boolean(anchorElRRSS);
  const handleClickSocialBtn = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElRRSS(event.currentTarget);
  };
  const handleMenuSocialClose = () => setAnchorElRRSS(null);
  const handleMenuSocialClickOpt = (social: Social) => {
    console.log(`click ${social.name}`);
  };

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
          {social.name}
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
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
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
