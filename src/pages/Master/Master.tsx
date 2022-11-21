/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { VariantType, useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Animal } from '../../common/model';
import { getAnimal } from '../../common/api';
import { InfoCard } from '../../components';
import { setPending } from '../../common/store/action';

const Master = () => {
  const { t } = useTranslation();
  const [list, setList] = useState<Animal[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(setPending({ type: 'animalGetList', state: true }));
    getAnimal(offset)
      .then((res) => setList(res))
      .catch(() => (
        enqueueSnackbar(t('msg.error'), { variant: 'error' })
      ))
      .finally(() => (
        dispatch(setPending({ type: 'animalGetList', state: false }))));
  }, []);

  return (
    <Box>
      <Grid container spacing={4}>
        {list.map((animal: Animal) => (
          <Grid item key={animal.id} xs={12}>
            <InfoCard animal={animal} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Master;
