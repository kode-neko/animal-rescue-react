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
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { useTranslation } from 'react-i18next';
import { DrawerHeader } from '../DrawerHeader';
import { SwitchTheme } from '../../SwitchTheme';
import { SwitchLang } from '../../SwitchLang';
import { title } from '../../../common/constants';

type MainBarProps = {
  isOpen: boolean
  handleDrawerClose: () => void
}

const MainBar = ({ isOpen, handleDrawerClose }:MainBarProps) => {
  const { t } = useTranslation();

  const ListActions = () => (
    <List>
      <ListItem key="create" disablePadding>
        <ListItemButton>
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary="create" />
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
      <ListItem key="twitter" disablePadding>
        <ListItemButton>
          <ListItemIcon><TwitterIcon /></ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </ListItemButton>
      </ListItem>
      <ListItem key="facebook" disablePadding>
        <ListItemButton>
          <ListItemIcon><FacebookIcon /></ListItemIcon>
          <ListItemText>Facebook</ListItemText>
        </ListItemButton>
      </ListItem>
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
