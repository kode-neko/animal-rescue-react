/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import { Animal, Species } from '../../common/model';
import { deleteAnimal, getAnimalList } from '../../common/api';
import { InfoCard, Modal } from '../../components';
import { setPending } from '../../common/store/action';

const Master = () => {
  const { t } = useTranslation();
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    animal?: Animal
  }>({ open: false });
  const [list, setList] = useState<Animal[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    dispatch(setPending({ type: 'animalGetList', state: true }));
    getAnimalList(offset)
      .then((res) => setList(res))
      .catch(() => (
        enqueueSnackbar(t('msg.errorList'), { variant: 'error' })
      ))
      .finally(() => (
        dispatch(setPending({ type: 'animalGetList', state: false }))));
  }, []);

  const handleDelete = (animal: Animal) => {
    setDeleteModal({ open: true, animal });
  };
  const handleModalClose = () => {
    setDeleteModal({ ...deleteModal, open: false });
  };
  const handleModalCancel = () => {
    setDeleteModal({ ...deleteModal, open: false });
  };
  const handleModalAccept = () => {
    deleteAnimal(deleteModal.animal?.id as string)
      .then(() => enqueueSnackbar(t('msg.successDelete'), { variant: 'success' }))
      .catch(() => enqueueSnackbar(t('msg.errorDelete'), { variant: 'error' }))
      .finally(() => setDeleteModal({ ...deleteModal, open: false }));
  };

  const translateTitle = (): string => {
    const species = deleteModal.animal?.species;
    return t('modal.title.delete', { species: t(`species.${Species[species]}`) });
  };
  const translateBody = (): string => {
    const species = deleteModal.animal?.species;
    const spiciesVal = Species[species];
    const gender = species === Species.COW ? 'female' : 'male';
    return t('modal.body.delete', {
      context: gender,
      species: t(`species.${spiciesVal}`),
      name: deleteModal.animal?.name,
    });
  };
  return (
    <Box>
      <Grid container spacing={4}>
        {list.map((animal: Animal) => (
          <Grid item key={animal.id} xs={12}>
            <InfoCard
              animal={animal}
              handleDelete={() => handleDelete(animal)}
            />
          </Grid>
        ))}
      </Grid>
      <Modal
        title={ translateTitle() as string}
        body={ translateBody() as string}
        open={deleteModal.open}
        handleClose={handleModalClose}
        btnList={[
          { id: 'close', label: t('labels.cancel'), handleClick: handleModalCancel },
          { id: 'accept', label: t('labels.accept'), handleClick: handleModalAccept },
        ]}
      />
    </Box>
  );
};

export default Master;
