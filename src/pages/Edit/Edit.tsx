import React, { useState, useEffect } from 'react';
import {
  Box,
} from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useSnackbar } from 'notistack';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { HeaderSubpage } from '../../components/HeaderSubpage';
import { routerEdit, routerMaster } from '../../common/router';
import { Form } from '../../components';
import { Animal } from '../../common/model';
import { getAnimal, postAnimal, putAnimal } from '../../common/api';
import { setPending } from '../../common/store/action';
import AnimalForm from '../../common/model/AnimalForm';

const Edit = () => {
  const { t } = useTranslation();
  const path = [routerMaster, routerEdit];
  const [animal, setAnimal] = useState<Animal>();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(setPending({ type: 'animalGet', state: true }));
      getAnimal(id)
        .then((res: Animal) => setAnimal(res))
        .catch(() => enqueueSnackbar('msg.errorGet', { variant: 'error' }))
        .finally(() => dispatch(setPending({ type: 'animalGet', state: false })));
    } else {
      navigate('/');
    }
  }, []);

  const handleSave = (values: AnimalForm) => {
    dispatch(setPending({ type: 'animalPut', state: true }));
    putAnimal(values)
      .then((res: Animal) => {
        enqueueSnackbar(
          t('msg.successPut', { animal: res.species, name: res.name }),
          { variant: 'success' },
        );
        navigate('/');
      })
      .catch(() => enqueueSnackbar('msg.errorPut'))
      .finally(() => dispatch(setPending({ type: 'animalPut', state: false })));
  };

  return (
    <Box>
        <HeaderSubpage path={path} title="pages.edit" />
        {animal && (
          <Form
            animal={animal}
            handleSave={handleSave}
          />
        )}
    </Box>
  );
};

export default Edit;
