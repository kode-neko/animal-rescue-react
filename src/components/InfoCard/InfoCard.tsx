import React from 'react';
import {
  Card,
  CardHeader,
  Avatar,
  CardContent,
  Typography,
  CardActions,
  IconButton,
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
import {
  Animal, ColorEyes, ColorFur, Size, SizeFur, Species,
} from '../../common/model';
import { RootState } from '../../common/store/store';

type InfoCardProps = {
    animal: Animal;
    handleEdit: (animal: Animal) => void;
    handleDelete: (animal: Animal) => void;
}

const InfoCard = ({ animal, handleEdit, handleDelete }: InfoCardProps) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const lang = useSelector((state:RootState) => state.user.lang);

  return (
    <Card elevation={3} sx={{ padding: '10px' }}>
        <CardHeader
            avatar={<Avatar alt="animal" src="/static/images/avatar/1.jpg" sx={{ width: '52px', height: '52px' }} />}
            title={<h2>{animal.name}</h2>}
        />
        <CardContent>
            <Grid container>
                <Grid container xs={12} md={6} paddingBottom={4}>
                    <Grid xs={6} >
                        <List disablePadding>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.bday')}
                                    secondary={datejs(animal.bday).locale(lang).format('MMMM D, YYYY')}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.species')}
                                    secondary={t(`species.${Species[animal.species]}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.colorFur')}
                                    secondary={t(`colors.${ColorFur[animal.color]}`)}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                    <Grid xs={6}>
                        <List disablePadding>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.eyes')}
                                    secondary={t(`colors.${ColorEyes[animal.eyes]}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.size')}
                                    secondary={t(`sizes.${Size[animal.size]}`)}
                                />
                            </ListItem>
                            <ListItem disablePadding>
                                <ListItemText
                                    primary={t('labels.sizeFur')}
                                    secondary={t(`sizes.${SizeFur[animal.sizeFur]}`)}
                                />
                            </ListItem>
                        </List>
                    </Grid>
                </Grid>
                <Grid xs={12} md={6}>
                    <Typography variant="body1" color="text.secondary" align='justify'>
                        {animal.desc}
                    </Typography>
                </Grid>
            </Grid>
        </CardContent>
        <CardActions disableSpacing sx={{
          display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '4px',
        }}>
            <IconButton aria-label="delete" size="large">
                <DeleteIcon onClick={() => handleDelete(animal)} />
            </IconButton>
            <IconButton aria-label="delete" size="large">
                <EditIcon onClick={() => navigate(`/edit/${animal.id}`)} />
            </IconButton>
        </CardActions>
    </Card>
  );
};

export default InfoCard;
