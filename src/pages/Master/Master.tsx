/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { Animal, Species } from '../../common/model';
import { setPending } from '../../common/store/action';
import { deleteAnimal, getAnimalList } from '../../common/api';
import { InfoCard, Modal } from '../../components';
import { limitListRest } from '../../common/constants';

const Master = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [isVisibleBtn, setIsVisibleBtn] = useState<boolean>(true);
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    animal?: Animal
  }>({ open: false });
  const [list, setList] = useState<Animal[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();

  const searchAnimal = (str: string) => {
    dispatch(setPending({ type: 'animalGetList', state: true }));
    getAnimalList(offset, str, limitListRest)
      .then((res) => {
        setIsVisibleBtn(res.length !== 0 || res.length < limitListRest);
        setList([...list, ...res]);
        setOffset(offset + limitListRest);
      })
      .catch(() => (
        enqueueSnackbar(t('msg.errorList'), { variant: 'error' })
      ))
      .finally(() => (
        dispatch(setPending({ type: 'animalGetList', state: false }))));
  };
  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      setOffset(0);
      setList([]);
      setIsVisibleBtn(true);
      searchAnimal(search);
    }
  };
  const handleLoadMore = () => {
    setOffset(offset + limitListRest);
    searchAnimal(search);
  };
  useEffect(() => {
    searchAnimal(search);
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
    return t('modal.title.delete', { species: t(`species.${String(species)}`) });
  };
  const translateBody = (): string => {
    const species = deleteModal.animal?.species;
    const spiciesVal = String(species);
    const gender = species === Species.COW ? 'female' : 'male';
    return t('modal.body.delete', {
      context: gender,
      species: t(`species.${spiciesVal}`),
      name: deleteModal.animal?.name,
    });
  };
  return (
    <Box>
      <Box display="flex" justifyContent="flex-end" mb={4}>
        <TextField
          id="search"
          variant="outlined"
          size="small"
          placeholder={t('placeH.search') as string}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={handleKeyUp}
          sx={{ minWidth: { xs: '100%', md: 'auto' } }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </Box>
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
      {isVisibleBtn && (
        <Grid textAlign="center" sx={{ marginTop: '40px' }}>
          <Button onClick={handleLoadMore} variant="outlined" size="medium">
              {t('labels.loadmore')}
          </Button>
        </Grid>
      )}
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
