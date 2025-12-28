// __tests__/Pagination.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Pagination from '../Pagination';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import paginationReducer from '@/store/slices/paginationSlice';
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

  const createMockStore = (initialPage: number = 1) => {
    return configureStore({
      reducer: {
        pagination: paginationReducer,
      },
      preloadedState: {
        pagination: {
          page: initialPage,
          totalPages: 1,
        },
      },
    });
  };

  const renderComponent = (props: PaginationProps) => {
    const store = createMockStore(props.page || 1);
    return render(
      <Provider store={store}>
        <Pagination {...props} />
      </Provider>,
    );
  };

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

  it('calls router.push when clicking next arrow', () => {
    renderComponent({ hasNextPage: true, nextPage: 2, page: 1, pageLength: 3 });

    fireEvent.click(screen.getByAltText('arrow right').closest('li')!);

    expect(pushMock).toHaveBeenCalledWith({
      pathname: '/test',
      query: { page: 2, category: 'all' },
    });
  });

  it('calls router.push when clicking previous arrow', () => {
    renderComponent({ hasPreviousPage: true, previousPage: 1, page: 2, pageLength: 3 });

    fireEvent.click(screen.getByAltText('arrow left').closest('li')!);

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
