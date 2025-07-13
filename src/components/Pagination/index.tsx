import StyledPagination from './Pagination.styled';
import { GlobalContext } from '../../Context/pagination';
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
        <li onClick={() => setNextPage(props.nextPage)}>
          <div className="icon-arrow icon-arrow-right">
            <Image width={20} height={20} loading="lazy" src={PAGINATION_ARROW} alt="arrow right" />
          </div>
        </li>
      );
    }
  };

  const createPreviousPageArrow = function () {
    if (props.hasPreviousPage) {
      return (
        <li onClick={() => setPreviowPage(props.previousPage)}>
          <div className="icon-arrow icon-arrow-left">
            <Image width={20} height={20} loading="lazy" src={PAGINATION_ARROW} alt="arrow left" />
          </div>
        </li>
      );
    }
  };

  const displayPagesCount = function () {
    if (props.hasNextPage || props.hasPreviousPage) {
      return (
        <div className="pagination">
          {createPreviousPageArrow()}
          &nbsp;
          <p>
            {props.page} / {props.pageLength} Páginas
          </p>
          &nbsp;
          {createNextPageArrow()}
        </div>
      );
    } else {
      return '';
    }
  };

  return (
    <StyledPagination>
      <div className="pagination-wrapper">{displayPagesCount()}</div>
    </StyledPagination>
  );
};

export default Pagination;
