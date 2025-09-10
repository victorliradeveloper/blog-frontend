// import Header from '@/presentation/components/Header';
import { LayoutProps } from './Layout.types';
import { useScrollContext } from '@/Context/scrollProvider';
import { useState } from 'react';
import SearchPost from '../SearchPost/SearchPost';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }: LayoutProps) => {
  const { containerRef } = useScrollContext();
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);

  const onOpenSearchModal = function () {
    setOpenSearchModal(prev => !prev);
  };

  const resetSearch = function () {};

  const closeSearch = function () {
    setOpenSearchModal(false);
  };

  const closeMobileMenu = function () {
    setOpenMobileMenu(false);
  };

  return (
    <>
      {/* <Header
        className="header"
        scrollIntoView={() => scrollIntoViewHandler()}
        onOpenSearchModal={onOpenSearchModal}
        onResetSearch={resetSearch}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={handleMobileMenu}
      /> */}
      <Header
        onOpenSearchModal={onOpenSearchModal}
        onResetSearch={resetSearch}
        openMobileMenu={openMobileMenu}
        setOpenMobileMenu={setOpenMobileMenu}
      />
      <SearchPost
        displaySearch={openSearchModal}
        onCloseSearch={closeSearch}
        onCloseMobileMenu={closeMobileMenu}
      />
      <main ref={containerRef as React.RefObject<HTMLDivElement>}>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
