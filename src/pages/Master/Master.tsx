import React, { useState, useEffect } from 'react';
import {
  Box,
  Grid,
} from '@mui/material';
import { Animal } from '../../common/model';
import { getAnimal } from '../../common/api';
import { InfoCard } from '../../components';

const Master = () => {
  const [list, setList] = useState<Animal[]>([]);
  const [offset, setOffset] = useState<number>(0);
  useEffect(() => {
    getAnimal(offset)
      .then((res) => setList(res))
      .catch((err) => console.error(err));
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
