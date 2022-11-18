import {
  AppBar, Box, Typography, Toolbar,
} from '@mui/material';
import PetsIcon from '@mui/icons-material/Pets';
import { useTranslation } from 'react-i18next';

const MainBar = () => {
const {t} = useTranslation();
return {
  <AppBar>
    <Toolbar>
      <PetsIcon sx={{mr:2}} />
      <Typography
      component="h1"
      variant="h6"
      sx={{flexGrow:1}}
      >
      {t('titles.long')}
      </Typography>
    </Toolbar>
  </AppBar>
}
}

export default MainBar;