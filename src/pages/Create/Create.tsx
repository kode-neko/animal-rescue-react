import React from 'react';
import {
  Box,
} from '@mui/material';
import { date } from 'yup';
import { HeaderSubpage } from '../../components/HeaderSubPage';
import { routerCreate, routerMaster } from '../../common/router';
import { Form } from '../../components';
import {
  Animal,
  ColorEyes, ColorFur, Sex, Size, SizeFur, Species,
} from '../../common/model/Animal';

const Create = () => {
  const path = [routerMaster, routerCreate];
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
        <HeaderSubpage path={path} title="pages.create" />
        <Form
          animal={animal}
          handleSave={(values: Animal) => console.log(values)}
        />
    </Box>
  );
};

export default Create;
