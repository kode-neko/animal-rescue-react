import React, { useState } from 'react';
import { FormControlLabel, Switch, Box } from '@mui/material';
// import LanguageIcon from '@mui/icons-material/Language';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { RootState, setLang } from '../../common/store';

const SwitchLang = () => {
  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const lang = useSelector((status: RootState) => status.user.lang);
  const handleSwitch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const langNew = value === 'es' ? 'en' : 'es';
    i18n.changeLanguage(langNew, (err, t) => {
      console.error(err);
    });
    dispatch(setLang({ lang: langNew }));
  };
  return (
    <Box display='flex'>
      <FormControlLabel
        control={<Switch defaultChecked color="default"/>}
        value={lang}
        label={lang.toLocaleUpperCase()}
        onChange={(e) => handleSwitch(e as React.ChangeEvent<HTMLInputElement>)}
      />
      { /* <LanguageIcon fontSize='medium'/> */}
    </Box>
  );
};

export default SwitchLang;
