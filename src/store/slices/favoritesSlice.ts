import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FavoritePost {
  post: number;
}

interface FavoritesState {
  favoritPosts: FavoritePost[];
}

const FAVORITES_STORAGE_KEY = 'lira-favorit-posts';

function loadFavoritesFromStorage(): FavoritePost[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const favoritPostsString = localStorage.getItem(FAVORITES_STORAGE_KEY);
    if (!favoritPostsString) return [];
    const favoritPostsArray = JSON.parse(favoritPostsString);
    return Array.isArray(favoritPostsArray) ? favoritPostsArray : [];
  } catch (error) {
    console.error('Erro ao carregar posts favoritos do localStorage:', error);
    return [];
  }
}

function saveFavoritesToStorage(favoritPosts: FavoritePost[]) {
  if (typeof window === 'undefined') return;
  
  try {
    const arrayEmString = JSON.stringify(favoritPosts);
    localStorage.setItem(FAVORITES_STORAGE_KEY, arrayEmString);
  } catch (error) {
    console.error('Erro ao salvar posts favoritos no localStorage:', error);
  }
}

const initialState: FavoritesState = {
  favoritPosts: loadFavoritesFromStorage(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      const alreadyFavorited = state.favoritPosts.some(item => item.post === postId);
      
      if (alreadyFavorited) {
        state.favoritPosts = state.favoritPosts.filter(item => item.post !== postId);
      } else {
        state.favoritPosts.push({ post: postId });
      }
      
      saveFavoritesToStorage(state.favoritPosts);
    },
    addFavorite: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      const alreadyFavorited = state.favoritPosts.some(item => item.post === postId);
      
      if (!alreadyFavorited) {
        state.favoritPosts.push({ post: postId });
        saveFavoritesToStorage(state.favoritPosts);
      }
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      const postId = action.payload;
      state.favoritPosts = state.favoritPosts.filter(item => item.post !== postId);
      saveFavoritesToStorage(state.favoritPosts);
    },
    loadFavorites: (state) => {
      state.favoritPosts = loadFavoritesFromStorage();
    },
  },
});

export const { toggleFavorite, addFavorite, removeFavorite, loadFavorites } = favoritesSlice.actions;
export default favoritesSlice.reducer;

