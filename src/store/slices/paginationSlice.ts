import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface PaginationState {
  page: number;
  totalPages: number;
}

const initialState: PaginationState = {
  page: 1,
  totalPages: 1,
};

const paginationSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
    setTotalPages: (state, action: PayloadAction<number>) => {
      state.totalPages = action.payload;
    },
    resetPagination: (state) => {
      state.page = 1;
      state.totalPages = 1;
    },
  },
});

export const { setPage, setTotalPages, resetPagination } = paginationSlice.actions;
export default paginationSlice.reducer;

