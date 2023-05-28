/* eslint-disable @typescript-eslint/no-empty-function */
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
import dayjs, { Dayjs } from 'dayjs';
import {
  Species, Sex, ColorFur, ColorEyes, Size, SizeFur, Animal,
} from '../../common/model';

type FormProps = {
    animal: Animal,
    handleSave: (values: Animal) => void
}

const Form = ({ animal, handleSave }: FormProps) => {
  const { t } = useTranslation();
  const [date, setDate] = React.useState<Dayjs>(dayjs());
  const validationSchema = Yup.object({
    name: Yup.string()
      .required(t('form.empty') as string)
      .max(30, t('form.max', { size: '30' }) as string),
    sex: Yup.mixed<Sex>().oneOf(Object.values(Sex)),
    desc: Yup.string()
        .required(t('form.empty') as string)
      .min(30, t('form.min', { size: '500' }) as string)
      .max(500, t('form.max', { size: '500' }) as string),
    breed: Yup.string().max(50, t('form.max', { size: '30' }) as string),
    color: Yup.mixed<ColorFur>().oneOf(Object.values(ColorFur)),
    eyes: Yup.mixed<ColorEyes>().oneOf(Object.values(ColorEyes)),
    species: Yup.mixed<Species>().oneOf(Object.values(Species)),
    size: Yup.mixed<Size>().oneOf(Object.values(Size)),
    sizeFur: Yup.mixed<SizeFur>().oneOf(Object.values(SizeFur)),
  });
  const formik = useFormik<Animal>({
    initialValues: animal,
    validationSchema,
    onSubmit: () => {},
  });

  return (
    <Box component="form" onSubmit={(e) => {
        e.preventDefault();
        if(formik.dirty && formik.isValid){
            handleSave({ ...formik.values, bday: new Date(date.toISOString()) });
        }

    }}>
        <Grid container rowSpacing={2} columnSpacing={{ xs: 2 }} sx={{ my: 2 }}>
            <Grid item xs={12}>
                <TextField
                    id="name"
                    label={t('labels.name')}
                    variant="filled"
                    required
                    value={formik.values.name}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    error={!!formik.errors.name && formik.touched.name}
                    helperText={formik.touched.name && formik.errors.name}
                    sx={{ height: 80 }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={6}>
                <FormControl fullWidth>
                    <FormLabel>{t('labels.sex')}</FormLabel>
                    <RadioGroup
                        aria-labelledby="sex"
                        name="sex"
                        value={formik.values.sex}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value={String(Sex.MALE)} control={<Radio />} label={t('sex.male')} />
                        <FormControlLabel value={String(Sex.FEMALE)} control={<Radio />} label={t('sex.female')} />
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
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        <FormControlLabel value={String(Species.CAT)} control={<Radio />} label={t('species.cat')} />
                        <FormControlLabel value={String(Species.DOG)} control={<Radio />} label={t('species.dog')} />
                        <FormControlLabel value={String(Species.COW)} control={<Radio />} label={t('species.cow')} />
                    </RadioGroup>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="breed"
                    label={t('labels.breed')}
                    variant="filled"
                    value={formik.values.breed}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    helperText={formik.errors.breed}
                    sx={{ height: 80 }}
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            label={t('labels.bday')}
                            value={date}
                            onChange={(newValue) => setDate(newValue)}
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
                        name="color"
                        value={formik.values.color}
                        label={t('labels.colorFur')}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        {Object.entries(ColorFur).map(([key, value]) => (
                            <MenuItem key={value} value={value}>{t(`colors.${value}`)}</MenuItem>
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
                        name="eyes"
                        value={formik.values.eyes}
                        label={t('labels.eyes')}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        {Object.entries(ColorEyes).map(([key, value]) => (
                            <MenuItem key={value} value={value}>{t(`colors.${value}`)}</MenuItem>
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
                        name="size"
                        value={formik.values.size}
                        label={t('labels.size')}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        {Object.entries(Size).map(([key, value]) => (
                            <MenuItem key={value} value={value}>{t(`sizes.${value}`)}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
                <FormControl fullWidth>
                    <InputLabel id="sizeFurLabel">{t('labels.size')}</InputLabel>
                    <Select
                        labelId="sizeFurLabel"
                        id="sizeFur"
                        name="sizeFur"
                        value={formik.values.sizeFur}
                        label={t('labels.size')}
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                    >
                        {Object.entries(SizeFur).map(([key, value]) => (
                            <MenuItem key={value} value={value}>{t(`sizes.${value}`)}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="desc"
                    label={t('labels.desc')}
                    multiline
                    rows={6}
                    variant="filled"
                    required
                    fullWidth
                    error={!!formik.errors.desc && formik.touched.desc}
                    value={formik.values.desc}
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    helperText={formik.touched.desc && formik.errors.desc}
                />
            </Grid>
        </Grid>
        <Box sx={{ my: 4, textAlign: 'right' }}>
            <Button variant="contained" size='large' type='submit'>{t('labels.save')}</Button>
        </Box>
    </Box>
  );
};

export default Form;
