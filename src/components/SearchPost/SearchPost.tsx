import Image from 'next/image';
import { useRef } from 'react';
import { useRouter } from 'next/router';
import { useQueryClient } from '@tanstack/react-query';
import { PostService } from '@/services/PostService';
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

const postService = new PostService();

function SearchPost({ displaySearch = false, onCloseSearch, onCloseMobileMenu }: SearchPostProps) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = async (value: string) => {
    if (!value) return;

    const page = '1';
    const limit = '8';

    try {
      await queryClient.prefetchQuery({
        queryKey: ['search-posts', value, page, limit],
        queryFn: () => postService.searchPosts(value, page, limit),
        staleTime: 5 * 60 * 1000,
      });
    } catch (error) {
      console.error('Error prefetching search:', error);
    }

    router.push(`/?query=${encodeURIComponent(value)}`);

    onCloseSearch();
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      const value = event.currentTarget.value.trim();
      handleSearch(value);
    }
  };

  const handleIconClick = () => {
    const value = inputRef.current?.value.trim();
    if (value) {
      handleSearch(value);
    }
    onCloseMobileMenu();
  };

  if (!displaySearch) return null;

  return (
    <StyledSearchPost>
      <SearchWrapper>
        <SearchInput ref={inputRef} type="search" placeholder="Search" onKeyDown={handleKeyDown} />
        <SearchGreyIcon>
          <SearchHint>Press enter to search</SearchHint>
          <SearchIconWrapper onClick={handleIconClick}>
            <Image src="/search-gray.png" alt="Gray search icon" width={30} height={30} />
          </SearchIconWrapper>
        </SearchGreyIcon>
      </SearchWrapper>
      <Overlay onClick={onCloseSearch} />
    </StyledSearchPost>
  );
}

export default SearchPost;
