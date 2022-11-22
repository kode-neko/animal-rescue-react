import React from 'react';
import {
  Box,
} from '@mui/material';
import { HeaderSubpage } from '../../components/HeaderSubpage';
import { routerEdit, routerMaster } from '../../common/router';

const Edit = () => {
  const path = [routerMaster, routerEdit];
  return (
    <Box>
        <HeaderSubpage path={path} title="pages.edit" />
        <Box>
            Excepteur ad veniam proident et commodo adipisicing aute sunt sint tempor enim est.
        </Box>
    </Box>
  );
};

export default Edit;
