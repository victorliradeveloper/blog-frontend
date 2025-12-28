import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface CurrentUser {
  name: string;
  picture: string;
  email: string;
}

interface UserState {
  currentUser: CurrentUser;
}

const initialState: UserState = {
  currentUser: {
    name: '',
    picture: '',
    email: '',
  },
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setCurrentUser: (state, action: PayloadAction<CurrentUser>) => {
      state.currentUser = action.payload;
    },
    updateUserPicture: (state, action: PayloadAction<string>) => {
      state.currentUser.picture = action.payload;
    },
    clearUser: (state) => {
      state.currentUser = initialState.currentUser;
    },
  },
});

export const { setCurrentUser, updateUserPicture, clearUser } = userSlice.actions;
export default userSlice.reducer;

