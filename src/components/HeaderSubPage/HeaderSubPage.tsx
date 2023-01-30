import React from 'react';
import {
  Box,
  Breadcrumbs,
  Link,
  Typography,
} from '@mui/material';
import { RouteObject, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

type HeaderSubPageProps = {
  path: RouteObject[],
  title: string
}

const HeaderSubPage = ({ path, title }: HeaderSubPageProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const handleClick = (link: string) => navigate(link);
  return (
    <Box sx={{ mb: 5 }}>
      <Breadcrumbs aria-label="breadcrumb">
        {path.map((page: RouteObject, index: number) => (
          <Link
            key={page.id}
            underline="hover"
            color={index !== path.length - 1 ? 'inherit' : 'text.primary'}
            onClick={() => handleClick(page.path as string)}
          >
           {t(`pages.${page.id as string}`)}
          </Link>
        ))}
      </Breadcrumbs>
      <Typography
        variant="h3"
        component="h1"
      >
        {t(title)}
      </Typography>
    </Box>
  );
};

export default HeaderSubPage;
