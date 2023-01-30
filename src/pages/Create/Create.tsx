import React from 'react';
import {
  Box,
} from '@mui/material';
import { useSnackbar } from 'notistack';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { routerCreate, routerMaster } from '../../common/router';
import { Form, HeaderSubPage } from '../../components';
import {
  Animal,
  ColorEyes, ColorFur, Sex, Size, SizeFur, Species,
} from '../../common/model/Animal';
import { postAnimal } from '../../common/api';
import { setPending } from '../../common/store/action';

const Create = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const path = [routerMaster, routerCreate];
  const animal: Animal = {
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
  const handleSave = (animalForm: Animal) => {
    dispatch(setPending({ type: 'animalPost', state: true }));
    postAnimal(animalForm)
      .then((res: Animal) => {
        enqueueSnackbar(
          t('msg.successCreate', { animal: res.species, name: res.name }),
          { variant: 'success' },
        );
        navigate('/');
      })
      .catch(() => enqueueSnackbar(t('msg.errorCreate'), { variant: 'error' }))
      .finally(() => dispatch(setPending({ type: 'animalPost', state: false })));
  };
  return (
    <Box>
        <HeaderSubPage path={path} title="pages.create" />
        <Form
          animal={animal}
          handleSave={handleSave}
        />
    </Box>
  );
};

export default Create;
