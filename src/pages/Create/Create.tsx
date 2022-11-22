import React from 'react';
import {
  Box,
} from '@mui/material';
import { HeaderSubpage } from '../../components/HeaderSubPage';
import { routerCreate, routerMaster } from '../../common/router';

const Create = () => {
  const path = [routerMaster, routerCreate];
  return (
    <Box>
        <HeaderSubpage path={path} title="pages.create" />
        <Box>
            Adipisicing laborum excepteur ad ipsum nisi deserunt.
        </Box>
    </Box>
  );
};

export default Create;
