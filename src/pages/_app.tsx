import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import React, { useEffect } from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { ReactQueryProvider } from '@/providers/queryProvider';
import { Provider, useDispatch } from 'react-redux';
import { store } from '@/store/store';
import { loadFavorites } from '@/store/slices/favoritesSlice';
import Layout from '@/components/Layout/Layout';

function AppContent({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadFavorites());
  }, [dispatch]);

  return <>{children}</>;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <ReactQueryProvider>
        <GoogleOAuthProvider clientId="1038532450717-5sjt921eagtenq8oe19at9548fq4rpea.apps.googleusercontent.com">
          <AppContent>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </AppContent>
        </GoogleOAuthProvider>
      </ReactQueryProvider>
    </Provider>
  );
}
