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
        <Box><HeaderSubpage path={path} title="pages.master" /></Box>
        <Box>
            Create
        </Box>
    </Box>
  );
};

export default Create;
