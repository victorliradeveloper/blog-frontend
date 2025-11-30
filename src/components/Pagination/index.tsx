import {
  StyledPagination,
  PaginationWrapper,
  PaginationContainer,
  ArrowListItem,
  ArrowIcon,
  PageInfo,
} from './Pagination.styled';
import { GlobalContext } from '@/Context/pagination';
import { useContext } from 'react';
import { useRouter } from 'next/router';
import React from 'react';
import Image from 'next/image';
import { IpropsPagination } from './types';
import { PAGINATION_ARROW } from '@/constants/images';

const Pagination = function (props: IpropsPagination) {
  const { setPage, page } = useContext(GlobalContext);
  const router = useRouter();
  let currentCategory = router.query.category;

  if (currentCategory === undefined) {
    currentCategory = 'all';
  }

  function setNextPage(route: number) {
    const nextPage = page + 1;
    setPage(nextPage);

    if (!props.queryParam) {
      router.push({
        pathname: router.pathname,
        query: {
          page: route,
          category: currentCategory,
        },
      });
    } else {
      router.push({
        pathname: router.pathname,
        query: {
          page: route,
          query: props.queryParam,
        },
      });
    }
  }

  const setPreviowPage = function (route: number) {
    const previousPage = page - 1;
    setPage(previousPage);

    if (!props.queryParam) {
      router.push({
        pathname: router.pathname,
        query: {
          page: route,
          category: currentCategory,
        },
      });
    } else {
      router.push({
        pathname: router.pathname,
        query: {
          page: route,
          query: props.queryParam,
        },
      });
    }
  };

  const createNextPageArrow = function () {
    if (props.hasNextPage) {
      return (
        <ArrowListItem onClick={() => setNextPage(props.nextPage)}>
          <ArrowIcon $direction="right">
            <Image width={20} height={20} loading="lazy" src={PAGINATION_ARROW} alt="arrow right" />
          </ArrowIcon>
        </ArrowListItem>
      );
    }
  };

  const createPreviousPageArrow = function () {
    if (props.hasPreviousPage) {
      return (
        <ArrowListItem onClick={() => setPreviowPage(props.previousPage)}>
          <ArrowIcon $direction="left">
            <Image width={20} height={20} loading="lazy" src={PAGINATION_ARROW} alt="arrow left" />
          </ArrowIcon>
        </ArrowListItem>
      );
    }
  };

  const displayPagesCount = function () {
    if (props.hasNextPage || props.hasPreviousPage) {
      return (
        <PaginationContainer>
          {createPreviousPageArrow()}
          <PageInfo>
            {props.page} / {props.pageLength} Pages
          </PageInfo>
          {createNextPageArrow()}
        </PaginationContainer>
      );
    } else {
      return null;
    }
  };

  return (
    <StyledPagination>
      <PaginationWrapper>{displayPagesCount()}</PaginationWrapper>
    </StyledPagination>
  );
};

export default Pagination;
