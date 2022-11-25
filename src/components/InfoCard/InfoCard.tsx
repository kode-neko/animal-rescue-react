import React from 'react';
import {
  Box,
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  Grid,
} from '@mui/material';
import datejs from 'dayjs';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import ChatIcon from '@mui/icons-material/Chat';
import {
  Animal, ColorEyes, ColorFur, Size, SizeFur, Species,
} from '../../common/model';
import { RootState } from '../../common/store/store';
import { Sex } from '../../common/model/Animal';
import cat from '../../assets/cat.png';
import dog from '../../assets/dog.png';
import cow from '../../assets/cow.png';

type InfoCardProps = {
    animal: Animal;
    handleDelete: (animal: Animal) => void;
}

function getAvatarPic(species: Species) {
  let pic;
  switch (String(species)) {
    case Species.CAT:
      pic = cat;
      break;
    case Species.DOG:
      pic = dog;
      break;
    case Species.COW:
      pic = cow;
      break;
    default:
      pic = cat;
  }
  return pic;
}

const InfoCard = ({ animal, handleDelete }: InfoCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const lang = useSelector((state:RootState) => state.user.lang);
  const getSex = (sex: Sex) => (String(sex) === Sex.FEMALE
    ? <FemaleIcon fontSize='large' sx={{ marginRight: '10px', color: 'hotPink' }} />
    : <MaleIcon fontSize='large' sx={{ marginRight: '10px', color: 'royalBlue' }} />
  );

  return (
    <Card elevation={3} sx={{ padding: '10px' }}>
        <CardHeader
            avatar={<Avatar alt="animal" src={getAvatarPic(animal.species)} sx={{ width: '52px', height: '52px' }} />}
            title={<Box display="flex" alignItems="center">{getSex(animal.sex)}<h2>{animal.name}</h2></Box>}
        />
        <CardContent>
            <Grid container>
                <Grid container item xs={12} md={6} paddingBottom={4}>
                    <Grid item xs={6} >
                        <List disablePadding>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.bday')}
                                    secondary={datejs(animal.bday).locale(lang).format('DD/MM/YYYY')}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.species')}
                                    secondary={t(`species.${String(animal.species)}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.breed')}
                                    secondary={animal.breed}
                                    sx={{ textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.colorFur')}
                                    secondary={t(`colors.${String(animal.color)}`)}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid item xs={6}>
                        <List disablePadding>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.eyes')}
                                    secondary={t(`colors.${String(animal.eyes)}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.size')}
                                    secondary={t(`sizes.${String(animal.size)}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.sizeFur')}
                                    secondary={t(`sizes.${String(animal.sizeFur)}`)}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="body1" color="text.secondary" align='justify'>
                        {animal.desc && <ChatIcon sx={{ mr: 2 }} />}{animal.desc}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions disableSpacing sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px',
        }}>
            <Button variant="outlined" size="large" startIcon={<DeleteIcon />} onClick={() => handleDelete(animal)}>
                {t('labels.delete')}
            </Button>
            <Button variant="outlined" size="large" startIcon={<EditIcon />} onClick={() => navigate(`/edit/${animal.id}`)}>
                {t('labels.edit')}
            </Button>
        </CardActions>
    </Card>
  );
};

export default InfoCard;
