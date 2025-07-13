import { createContext, useContext, useState } from 'react';

interface Post {
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

interface SearchContextProps {
  query: string;
  setQuery: (query: string) => void;
  searchedPosts: Post[] | null;
  setSearchedPosts: (posts: Post[] | null) => void;
}

const SearchContext = createContext<SearchContextProps | undefined>(undefined);

export function SearchProvider({ children }: { children: React.ReactNode }) {
  const [query, setQuery] = useState('');
  const [searchedPosts, setSearchedPosts] = useState<Post[] | null>(null);

  return (
    <SearchContext.Provider
      value={{
        query,
        setQuery,
        searchedPosts,
        setSearchedPosts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearchContext must be used within a SearchProvider');
  }
  return context;
}
