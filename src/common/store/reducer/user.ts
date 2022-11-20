/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Theme, User } from '../../model';

const initialState: User = {
  name: '',
  mail: '',
  lang: 'es',
  theme: Theme.DARK,
};

const reducers = {
  setUser: (state: User, action: PayloadAction<User>) => {
    state.name = action.payload.name;
    state.mail = action.payload.mail;
    state.lang = action.payload.lang;
    state.theme = action.payload.theme;
  },
  setLang: (state: User, action: PayloadAction<Pick<User, 'lang'>>) => {
    state.lang = action.payload.lang;
  },
  setTheme: (state: User, action: PayloadAction<Pick<User, 'theme'>>) => {
    state.theme = action.payload.theme;
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers,
});

export default userSlice;
