import React from 'react';
import {
  Box,
} from '@mui/material';
import { HeaderSubpage } from '../../components/HeaderSubpage';
import { routerEdit, routerMaster } from '../../common/router';
import { Form } from '../../components';
import {
  Animal, Sex, ColorEyes, ColorFur, Species, Size, SizeFur,
} from '../../common/model';

const Edit = () => {
  const path = [routerMaster, routerEdit];
  const animal = {
    name: '',
    bday: new Date(),
    sex: Sex.MALE,
    desc: '',
    breed: '',
    color: ColorFur.BLACK,
    eyes: ColorEyes.BLUE,
    species: Species.CAT,
    size: Size.LARGE,
    sizeFur: SizeFur.LARGE,
  };
  return (
    <Box>
        <HeaderSubpage path={path} title="pages.edit" />
        <Form
          animal={animal}
          handleSave={(values: Animal) => console.log(values)}
        />
    </Box>
  );
};

export default Edit;
