import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './slices/searchSlice';
import paginationReducer from './slices/paginationSlice';
import userReducer from './slices/userSlice';
import favoritesReducer from './slices/favoritesSlice';

export const store = configureStore({
  reducer: {
    search: searchReducer,
    pagination: paginationReducer,
    user: userReducer,
    favorites: favoritesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

