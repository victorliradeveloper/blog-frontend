import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import {
  StyledSearchPost,
  SearchWrapper,
  SearchInput,
  SearchGreyIcon,
  SearchHint,
  SearchIconWrapper,
  Overlay,
} from './SearchPost.styled';
import { SearchPostProps } from './SearchPost.types';

function SearchPost({ displaySearch = false, onCloseSearch, onCloseMobileMenu }: SearchPostProps) {
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = event.currentTarget.value.trim();
      if (value) {
        router.push(`/?query=${encodeURIComponent(value)}`);
      }
      onCloseSearch();
    }
  };

  const handleIconClick = () => {
    const value = inputRef.current?.value.trim();

    if (value) {
      router.push(`?query=${encodeURIComponent(value)}`);
    }
    onCloseMobileMenu();
    onCloseSearch();
  };

  if (!displaySearch) return null;

  return (
    <StyledSearchPost>
      <SearchWrapper>
        <SearchInput
          ref={inputRef}
          type="search"
          placeholder="Search"
          onKeyDown={handleKeyDown}
        />
        <SearchGreyIcon>
          <SearchHint>Press enter to search</SearchHint>
          <SearchIconWrapper onClick={handleIconClick}>
            <Image
              src="/search-gray.png"
              alt="Gray search icon"
              width={30}
              height={30}
            />
          </SearchIconWrapper>
        </SearchGreyIcon>
      </SearchWrapper>
      <Overlay onClick={onCloseSearch} />
    </StyledSearchPost>
  );
}

export default SearchPost;
