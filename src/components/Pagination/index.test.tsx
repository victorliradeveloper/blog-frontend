// __tests__/Pagination.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import { useRouter } from 'next/router';
import { GlobalContext } from '@/Context/pagination';
import React from 'react';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

// Mock do Next.js Image para não quebrar os testes
jest.mock('next/image', () => {
  const MockedImage = ({ src, alt }: { src: string; alt: string }) => <img src={src} alt={alt} />;
  MockedImage.displayName = 'MockedImage';
  return MockedImage;
});

interface PaginationProps {
  hasNextPage?: boolean;
  hasPreviousPage?: boolean;
  nextPage?: number;
  previousPage?: number;
  page?: number;
  pageLength?: number;
}

describe('Pagination', () => {
  const pushMock = jest.fn();
  const setPageMock = jest.fn();
  const setTotalPagesMock = jest.fn();

  const renderComponent = (props: PaginationProps) =>
    render(
      <GlobalContext.Provider
        value={{
          page: props.page || 1,
          setPage: setPageMock,
          totalPages: props.pageLength || 1,
          setTotalPages: setTotalPagesMock,
        }}
      >
        <Pagination {...props} />
      </GlobalContext.Provider>,
    );

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({
      pathname: '/test',
      query: {},
      push: pushMock,
    });
    jest.clearAllMocks();
  });

  it('renders next and previous arrows when hasNextPage and hasPreviousPage are true', () => {
    renderComponent({
      hasNextPage: true,
      hasPreviousPage: true,
      nextPage: 2,
      previousPage: 1,
      page: 1,
      pageLength: 3,
    });

    expect(screen.getByAltText('arrow right')).toBeInTheDocument();
    expect(screen.getByAltText('arrow left')).toBeInTheDocument();
    expect(screen.getByText('1 / 3 Pages')).toBeInTheDocument();
  });

  it('calls setPage and router.push when clicking next arrow', () => {
    renderComponent({ hasNextPage: true, nextPage: 2, page: 1, pageLength: 3 });

    fireEvent.click(screen.getByAltText('arrow right').closest('li')!);

    expect(setPageMock).toHaveBeenCalledWith(2);
    expect(pushMock).toHaveBeenCalledWith({
      pathname: '/test',
      query: { page: 2, category: 'all' },
    });
  });

  it('calls setPage and router.push when clicking previous arrow', () => {
    renderComponent({ hasPreviousPage: true, previousPage: 1, page: 2, pageLength: 3 });

    fireEvent.click(screen.getByAltText('arrow left').closest('li')!);

    expect(setPageMock).toHaveBeenCalledWith(1);
    expect(pushMock).toHaveBeenCalledWith({
      pathname: '/test',
      query: { page: 1, category: 'all' },
    });
  });

  it('renders nothing if hasNextPage and hasPreviousPage are false', () => {
    renderComponent({ hasNextPage: false, hasPreviousPage: false, page: 1, pageLength: 1 });

    expect(screen.queryByText(/Pages/)).toBeNull();
  });
});
