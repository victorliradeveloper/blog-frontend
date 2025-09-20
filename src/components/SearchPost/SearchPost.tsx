import Image from 'next/image';
// import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import StyledSearchPost from './SearchPost.styled';
import { SearchPostProps } from './SearchPost.types';
// import { useSearchContext } from '@/Context/searchContext';

function SearchPost({ displaySearch = false, onCloseSearch, onCloseMobileMenu }: SearchPostProps) {
  // const [enabled, setEnabled] = useState(false);
  const router = useRouter();

  // const { query, setQuery, setSearchedPosts } = useSearchContext();

  // Removendo a importação do usePosts
  // import { usePosts } from '@/presentation/hooks/usePosts';

  // Removendo o hook usePosts e suas dependências
  // const { data } = usePosts({
  //   query,
  //   page: '1',
  //   limit: '8',
  // });

  // Removendo o useEffect que dependia do data
  // useEffect(() => {
  //   if (data) {
  //     setSearchedPosts(data.results);
  //   }
  // }, [data, setSearchedPosts]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      const value = target.value.trim();
      if (value) {
        // setQuery(value);
        // setEnabled(true);
        router.push(`/?query=${encodeURIComponent(value)}`);
      }
      onCloseSearch();
    }
  };

  const handleIconClick = () => {
    const inputElement = document.querySelector('.search') as HTMLInputElement;
    const value = inputElement?.value.trim();

    if (value) {
      // setQuery(value);
      // setEnabled(true);
      router.push(`?query=${encodeURIComponent(value)}`);
    }
    onCloseMobileMenu();
    onCloseSearch();
  };

  if (!displaySearch) return null;

  return (
    <StyledSearchPost>
      <div className="search-wrapper">
        <input className="search" type="search" placeholder="Search" onKeyDown={handleKeyDown} />
        <div className="search-grey-icon">
          <p>Press enter to search</p>
          <Image
            src="/search-gray.png"
            alt="Gray search icon"
            onClick={handleIconClick}
            width={30}
            height={30}
          />
        </div>
      </div>
      <div className="overlay" onClick={onCloseSearch}></div>
    </StyledSearchPost>
  );
}

export default SearchPost;
