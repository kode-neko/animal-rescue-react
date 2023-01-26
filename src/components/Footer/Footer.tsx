import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
        <Box textAlign="center">{t('credits')}</Box>
  );
};

export default Footer;
