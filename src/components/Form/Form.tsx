import React from 'react';
import {
  Box,
  TextField,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
} from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Species, Sex, ColorFur, ColorEyes, Size, SizeFur, Animal,
} from '../../common/model/Animal';

type FormProps = {
    animal: Animal,
    handleSave: (animal: Animal) => void
}

const Form = ({ animal, handleSave }: FormProps) => {
  const { t } = useTranslation();
  const formik = useFormik<Animal>({
    initialValues: animal,
    validationSchema: Yup.object({
      name: Yup.string().max(30, t('hint.name') as string),
      bday: Yup.date(),
      sex: Yup.mixed<Sex>().oneOf(Object.values(Sex)),
      desc: Yup.string().max(100, t('hint.desc') as string),
      breed: Yup.string().max(30, t('hint.breed') as string),
      color: Yup.mixed<ColorFur>().oneOf(Object.values(ColorFur)),
      eyes: Yup.mixed<ColorEyes>().oneOf(Object.values(ColorEyes)),
      species: Yup.mixed<Species>().oneOf(Object.values(Species)),
      size: Yup.mixed<Size>().oneOf(Object.values(Size)),
      sizeFur: Yup.mixed<SizeFur>().oneOf(Object.values(SizeFur)),
    }),
    onSubmit: handleSave,
  });

  return (
        <Box component="form" onSubmit={formik.handleSubmit}>
            <TextField
                id="name"
                label={t('labels.name')}
                variant="filled"
                value={formik.values.name}
                onChange={formik.handleChange}
                helperText={formik.errors.name}
                fullWidth
            />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ my: 2 }}>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel>{t('labels.sex')}</FormLabel>
                        <RadioGroup
                            aria-labelledby="sex"
                            name="sex"
                            value={formik.values.sex}
                            onChange={formik.handleChange}
                        >
                            <FormControlLabel value={Sex.MALE} control={<Radio />} label={t('sex.male')} />
                            <FormControlLabel value={Sex.FEMALE} control={<Radio />} label={t('sex.female')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={6}>
                    <FormControl fullWidth>
                        <FormLabel>{t('labels.species')}</FormLabel>
                        <RadioGroup
                            aria-labelledby="species"
                            name="species"
                            value={formik.values.species}
                            onChange={formik.handleChange}
                        >
                            <FormControlLabel value={Species.CAT} control={<Radio />} label={t('species.cat')} />
                            <FormControlLabel value={Species.DOG} control={<Radio />} label={t('species.dog')} />
                            <FormControlLabel value={Species.COW} control={<Radio />} label={t('species.cow')} />
                        </RadioGroup>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label={t('labels.bday')}
                                value={formik.values.bday}
                                onChange={formik.handleChange}
                                renderInput={(params) => <TextField {...params} />}
                            />
                        </LocalizationProvider>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="colorLabel">{t('labels.colorFur')}</InputLabel>
                        <Select
                            labelId="colorLabel"
                            id="color"
                            value={formik.values.color}
                            label={t('labels.colorFur')}
                            onChange={formik.handleChange}
                        >
                            {Object.entries(ColorFur).map(([key, value]) => (
                                <MenuItem key={value} value={ColorFur[key]}>{t(`colors.${value}`)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="eyes">{t('labels.eyes')}</InputLabel>
                        <Select
                            labelId="eyesLabel"
                            id="eyes"
                            value={formik.values.eyes}
                            label={t('labels.eyes')}
                            onChange={formik.handleChange}
                        >
                            {Object.entries(ColorEyes).map(([key, value]) => (
                                <MenuItem key={value} value={ColorEyes[key]}>{t(`colors.${value}`)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="sizelabel">{t('labels.size')}</InputLabel>
                        <Select
                            labelId="sizeLabel"
                            id="size"
                            value={formik.values.size}
                            label={t('labels.size')}
                            onChange={formik.handleChange}
                        >
                            {Object.entries(Size).map(([key, value]) => (
                                <MenuItem key={value} value={Size[key]}>{t(`sizes.${value}`)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth>
                        <InputLabel id="sizeFurLabel">{t('labels.size')}</InputLabel>
                        <Select
                            labelId="sizeFurLabel"
                            id="size"
                            value={formik.values.sizeFur}
                            label={t('labels.size')}
                            onChange={formik.handleChange}
                        >
                            {Object.entries(SizeFur).map(([key, value]) => (
                                <MenuItem key={value} value={SizeFur[key]}>{t(`sizes.${value}`)}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
            <TextField
                id="desc"
                label={t('labels.desc')}
                multiline
                rows={6}
                variant="filled"
                fullWidth
                value={formik.values.desc}
                onChange={formik.handleChange}
                helperText={formik.errors.desc}
            />
            <Box sx={{ my: 4, textAlign: 'right' }}>
                <Button variant="contained" size='large' type='submit'>{t('labels.save')}</Button>
            </Box>
        </Box>
  );
};

export default Form;
