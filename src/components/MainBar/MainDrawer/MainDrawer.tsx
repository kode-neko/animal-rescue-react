import React from 'react';
import {
  Divider,
  Drawer,
  List,
  ListItem,
  IconButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useTranslation } from 'react-i18next';
import { DrawerHeader } from '../DrawerHeader';

type MainBarProps = {
  isOpen: boolean
  handleDrawerClose: () => void
}

const MainBar = ({ isOpen, handleDrawerClose }:MainBarProps) => {
  const { t } = useTranslation();
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
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem key="theme" disablePadding>
          <ListItemText>Example</ListItemText>
        </ListItem>
        <ListItem key="lang" disablePadding>
          <ListItemText>Example</ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem key="twitter" disablePadding>
          <ListItemIcon>
            <TwitterIcon />
          </ListItemIcon>
          <ListItemText>Twitter</ListItemText>
        </ListItem>
        <ListItem key="facebook" disablePadding>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText>Facebook</ListItemText>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default MainBar;
