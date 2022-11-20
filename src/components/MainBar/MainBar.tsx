import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Typography,
  Toolbar,
  IconButton,
  Button,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { MainDrawer } from './MainDrawer';
import { title } from '../../common/constants';
import { SwitchTheme } from '../SwitchTheme';
import { SwitchLang } from '../SwitchLang';

const MainBar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [lang, setLang] = useState<string>('es');
  const handleDrawerToggle = () => setIsOpen(!isOpen);
  // setAnchorEl(event.currentTarget);
  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {};
  // const handleClose = () => setAnchorEl(null);
  const handleClose = () => {};
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
          <Box sx={{ display: { xs: 'none', sm: 'flex', gap: '10px' } }}>
            <Button
              startIcon={<AddCircleIcon />}
              size="large"
              aria-label="create new animal"
              sx={{ color: 'white' }}
            >
              {'Añadir'}
            </Button>
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
