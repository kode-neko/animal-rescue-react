import React from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItemButton,
  Typography,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import DrawerHeader from './DrawerHeader';
import { SwitchTheme } from '../../SwitchTheme';
import { SwitchLang } from '../../SwitchLang';
import { socialList, title } from '../../../common/constants';
import Social from '../../../common/model/Social';

type MainBarProps = {
  isOpen: boolean
  handleDrawerClose: () => void
}

const MainBar = ({ isOpen, handleDrawerClose }:MainBarProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const ListActions = () => (
    <List>
      <ListItem key="home" disablePadding>
        <ListItemButton onClick={() => { navigate('/'); handleDrawerClose(); }}>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary={t('pages.master')} />
        </ListItemButton>
      </ListItem>
      <ListItem key="create" disablePadding>
        <ListItemButton onClick={() => { navigate('/create'); handleDrawerClose(); }}>
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary={t('pages.create')} />
        </ListItemButton>
      </ListItem>
      <Divider />
      <ListItem key="theme" disablePadding>
        <ListItemText sx={{ padding: '8px 16px' }}>
          <SwitchTheme />
        </ListItemText>
      </ListItem>
      <ListItem key="lang" disablePadding>
        <ListItemText sx={{ padding: '8px 16px' }}>
          <SwitchLang />
        </ListItemText>
      </ListItem>
    </List>
  );

  const ListRRSS = () => (
    <List>
      {socialList.map((social: Social) => (
        <ListItem key={social.name} disablePadding>
          <ListItemButton onClick={() => navigate(social.url)}>
            <ListItemIcon><social.icon /></ListItemIcon>
            <ListItemText>{ social.name }</ListItemText>
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Drawer
      variant="temporary"
      open={isOpen}
      ModalProps={{ keepMounted: true }}
      anchor="left"
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronLeftIcon />
        </IconButton>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
        >
          {title}
        </Typography>
      </DrawerHeader>
      <Divider />
        <ListActions />
      <Divider />
        <ListRRSS />
    </Drawer>
  );
};

export default MainBar;
