/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import App from '../../model/App';

const initialState: App = {
  animalGetList: false,
  animalGet: false,
  animalPost: false,
  animalPut: false,
  animalDelete: false,
};

interface PayloadAppPending {
  type: string;
  state: boolean;
}

type AppKeys = keyof App;

const reducers = {
  setPending: (state: App, action: PayloadAction<PayloadAppPending>) => {
    const { type, state: stateAct } = action.payload;
    state[type as AppKeys] = stateAct;
  },
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export default appSlice;