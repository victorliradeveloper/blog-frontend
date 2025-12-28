import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  title: string;
  content: string;
  date: string;
  category: string;
  metaTagTitle: string;
  metaTagDescription: string;
  postImage: string;
  postBackground: string;
  author: string;
  keywords: string;
}

interface SearchState {
  query: string;
  searchedPosts: Post[] | null;
}

const initialState: SearchState = {
  query: '',
  searchedPosts: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
    },
    setSearchedPosts: (state, action: PayloadAction<Post[] | null>) => {
      state.searchedPosts = action.payload;
    },
    clearSearch: (state) => {
      state.query = '';
      state.searchedPosts = null;
    },
  },
});

export const { setQuery, setSearchedPosts, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;

