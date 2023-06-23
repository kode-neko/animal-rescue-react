/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  TextField,
  InputAdornment,
  Button,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
import { useTranslation } from 'react-i18next';
import SearchIcon from '@mui/icons-material/Search';
import { Animal, Species } from '../../common/model';
import { setPending } from '../../common/store/action';
import { deleteAnimal, getAnimalList } from '../../common/api';
import { InfoCard, Modal } from '../../components';
import { limitListRest } from '../../common/constants';
import { RootState } from '../../common/store/store';
import styles from './styles.module.scss';
import PetsIcon from '@mui/icons-material/Pets';

const Master = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState<string>('');
  const [isVisibleBtn, setIsVisibleBtn] = useState<boolean>(false);
  const [deleteModal, setDeleteModal] = useState<{
    open: boolean;
    animal?: Animal
  }>({ open: false });
  const [list, setList] = useState<Animal[]>([]);
  const [offset, setOffset] = useState<number>(0);
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.app.animalGetList)
  const { enqueueSnackbar } = useSnackbar();

  const searchAnimal = (str: string, offset: number, list: Animal[]) => {
    dispatch(setPending({ type: 'animalGetList', state: true }));
    getAnimalList(offset, str, limitListRest)
      .then((res) => {
        setIsVisibleBtn(res.length === limitListRest);
        setList([...list, ...res]);
        setOffset(offset + limitListRest);
      })
      .catch(() => (
        enqueueSnackbar(t('msg.errorList'), { variant: 'error' })
      ))
      .finally(() => (
        dispatch(setPending({ type: 'animalGetList', state: false }))));
  };
  const initSearch = (str: string) => {
    setOffset(0);
    setList([]);
    searchAnimal(str, 0, []);
  }
  const initSearchAll = () => {
    setSearch("");
    initSearch("");
  }
  const insertEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      initSearch(search);
    }
  };
  const handleLoadMore = () => {
    const newOffset = offset + limitListRest;
    searchAnimal(search, newOffset, list);
    setOffset(newOffset);
  };
  useEffect(() => {
    searchAnimal(search, 0, list);
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
      <Box display="flex" justifyContent="flex-end" gap={1} mb={4}>
        <TextField
          id="search"
          variant="outlined"
          size="small"
          placeholder={t('placeH.search') as string}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyUp={insertEnter}
          sx={{ width: { xs: '100%', md: 'auto' } }}
        />
        <Button variant="contained" onClick={() => initSearch(search)}><SearchIcon /></Button>
        <Button variant="outlined" onClick={initSearchAll}>{t('labels.all')}</Button>
      </Box>
      {!loading && list.length === 0 ? (
          <div className={styles.noData}>
            <PetsIcon className={styles.icon} />
            <p>{ t('noData') }</p>
          </div>
        ) : (
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
      )}
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
