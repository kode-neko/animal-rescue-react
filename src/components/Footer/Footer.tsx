import React from 'react';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Box textAlign="center">{t('credits')}</Box>
    </div>
  );
};

export default Footer;
