import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  MouseEvent,
  useEffect,
  useCallback,
} from 'react';

type IAddToFavoritsProps = {
  addToFavoritsHandler: (e: MouseEvent) => void;
  favoritPosts: { post: number }[];
};

const AddToFavoritsContext = createContext<IAddToFavoritsProps | undefined>(undefined);

function fetchFavoritPosts() {
  try {
    const favoritPostsString = localStorage.getItem('lira-favorit-posts');
    if (!favoritPostsString) return [];
    const favoritPostsArray = JSON.parse(favoritPostsString);
    return Array.isArray(favoritPostsArray) ? favoritPostsArray : [];
  } catch (error) {
    console.error('Erro ao carregar posts favoritos do localStorage:', error);
    return [];
  }
}

function savePostToFavorits(favoritPosts: { post: number }[]) {
  try {
    const arrayEmString = JSON.stringify(favoritPosts);
    localStorage.setItem('lira-favorit-posts', arrayEmString);
  } catch (error) {
    console.error('Erro ao salvar posts favoritos no localStorage:', error);
  }
}

export const AddToFavoritsProvider = ({ children }: { children: ReactNode }) => {
  const [favoritPosts, setFavoritPosts] = useState<{ post: number }[]>([]);
  const [currentPostId, setCurrentPostId] = useState<{ id: number; date: Date } | null>(null);

  useEffect(() => {
    const favoritPostsArray = fetchFavoritPosts();
    setFavoritPosts(favoritPostsArray);
  }, []);

  const toggleFavoritePost = useCallback((postId: number) => {
    setFavoritPosts((prev) => {
      const alreadyFavorited = prev.some((item) => item.post === postId);
      return alreadyFavorited ? prev.filter((item) => item.post !== postId) : [...prev, { post: postId }];
    });
  }, []);
  
  useEffect(() => {
    if (!currentPostId?.id) return;
    toggleFavoritePost(currentPostId.id);
  }, [currentPostId, toggleFavoritePost]);

  useEffect(() => {
    if (favoritPosts.length > 0) {
      savePostToFavorits(favoritPosts);
    }
  }, [favoritPosts]);

  const addToFavoritsHandler = (e: MouseEvent) => {
    const closestElement = (e.currentTarget as HTMLElement).closest('[data-id]');

    if (closestElement && closestElement instanceof HTMLElement) {
      const currentPostId = Number(closestElement.dataset.id);

      setCurrentPostId({ id: currentPostId, date: new Date() });
    } else {
      console.log('Elemento com data-id não encontrado ou não é um HTMLElement.');
    }
  };

  return (
    <AddToFavoritsContext.Provider value={{ addToFavoritsHandler, favoritPosts }}>
      {children}
    </AddToFavoritsContext.Provider>
  );
};

export const useAddToFavoritsContext = () => {
  const context = useContext(AddToFavoritsContext);
  if (context === undefined) {
    throw new Error('useAddToFavoritsContext must be used within an AddToFavoritsProvider');
  }
  return context;
};
