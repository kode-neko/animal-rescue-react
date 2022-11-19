import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { userSlice } from './reducer';

const rootReducer = combineReducers({
  user: userSlice.reducer,
});

const store = configureStore({
  reducer: rootReducer,
});

type RootState = ReturnType<typeof store.getState>;

export { store };
export type { RootState };
