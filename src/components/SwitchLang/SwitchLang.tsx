import React from 'react';
import { Box, ToggleButtonGroup, ToggleButton, styled, ToggleButtonProps } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import TranslateIcon from '@mui/icons-material/Translate';
import { RootState } from '../../common/store/store';
import { setLang } from '../../common/store/action/user';
import { Theme } from '../../common/model';

const ToggleButtonCustom = styled(ToggleButton)<ToggleButtonProps>(({ theme }) => ({
  "&.Mui-selected, &.Mui-selected:hover": {
    color: 'white',
    backgroundColor: theme.palette.mode === Theme.DARK ? 'rgba(255, 255, 255, 0.16)' : 'rgba(0, 0, 0, 0.2);'
  },
}));

const SwitchLang = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const lang = useSelector((status: RootState) => status.user.lang);
  const handleSwitch = async (
    event: React.MouseEvent<HTMLElement>,
    newLang: string | null,
  ) => {
    if (newLang !== null) {
      i18n.changeLanguage(newLang as string);
      dispatch(setLang({ lang: newLang as string }));
    }
  };
  return (
    <Box display="flex" alignItems="center" gap="10px">
      <ToggleButtonGroup
        value={lang}
        exclusive
        size="small"
        onChange={handleSwitch}
        aria-label="changing language"
      >
        <ToggleButtonCustom value="en" aria-label="english">{'EN'}</ToggleButtonCustom>
        <ToggleButtonCustom value="es" aria-label="spanish">{'ES'}</ToggleButtonCustom>
      </ToggleButtonGroup>
      <TranslateIcon />
    </Box>
  );
};

export default SwitchLang;
