'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import StyledHeader from './Header.styled';
import AOS from 'aos';
import Image from 'next/image';
import { IHeaderProps } from './types';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import { useCurrentUser } from '@/Context/currentUser';
import { CODE_ICON, CLOSE_MENU_ICON, MENU_HAMBURGUER } from '@/constants/images';

const Header = function (props: IHeaderProps) {
  const [currentTab, setCurrentTab] = useState('');

  const router = useRouter();
  const currentUrl = router.asPath;
  const [headerFadeDown, setHeaderFadeDown] = useState('fade-down');
  const { callSetCurrentUser, currentUser } = useCurrentUser();

  const menuToggleBaseOnUrl = useCallback(() => {
    if (currentUrl.includes('all')) {
      setCurrentTab('all');
    } else if (currentUrl.includes('web')) {
      setCurrentTab('web');
    } else if (currentUrl.includes('mobile')) {
      setCurrentTab('mobile');
    } else if (currentUrl.includes('outros')) {
      setCurrentTab('outros');
    } else if (currentUrl.includes('portfolio')) {
      setCurrentTab('portfolio');
    } else {
      setCurrentTab('all');
    }

    props.onResetSearch?.();
    hideMobileMenu();
  }, [currentUrl, setCurrentTab]);

  useEffect(() => {
    AOS.init();
    menuToggleBaseOnUrl();
    const updateWindowWidth = () => {
      if (window.innerWidth < 700) {
        setHeaderFadeDown('');
      }
    };
    updateWindowWidth();
  }, [menuToggleBaseOnUrl]);

  const showMobileMenu = function () {
    props.setOpenMobileMenu?.(true);
  };

  const categoryOptionHandler = function (route: string, category: string) {
    router.push({
      pathname: '/',
      query: {
        page: route,
        category: category,
      },
    });

    const handleRouteChangeComplete = () => {
      if (props && props.scrollIntoView && category !== 'all') {
        props.scrollIntoView();
      }
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    hideMobileMenu();
  };

  const hideMobileMenu = function () {
    props.setOpenMobileMenu?.(false);
  };

  const goBackToHomePage = function () {
    categoryOptionHandler('1', 'all');
  };

  return (
    <>
      <StyledHeader data-aos={headerFadeDown} className={props.className}>
        <div className="container">
          <nav>
            <div className="home" onClick={goBackToHomePage}>
              <Image
                width={50}
                height={40}
                className="header-icon"
                src={CODE_ICON}
                alt="header icon"
              />
            </div>
            <div className={`menu-wrapper ${props.openMobileMenu ? 'active' : ''}`}>
              <Image
                width={50}
                height={20}
                onClick={() => hideMobileMenu()}
                className="close"
                src={CLOSE_MENU_ICON}
                alt="close menu"
                data-id="close-sidebar-btn"
              />

              <div className="div-left">
                <ul className='menu' style={{ display: 'flex' }}>
                  <li
                    onClick={() => {
                      goBackToHomePage();
                    }}
                    className={`home ${currentTab === 'all' ? 'active' : ''}`}
                  >
                    Home
                  </li>

                  <li
                    className={`web-option ${currentTab === 'web' ? 'active' : ''}`}
                    onClick={() => categoryOptionHandler('1', 'web')}
                  >
                    Web
                  </li>

                  <li
                    className={`mobile-option ${currentTab === 'mobile' ? 'active' : ''}`}
                    onClick={() => categoryOptionHandler('1', 'mobile')}
                  >
                    Mobile
                  </li>
                  <li
                    className={`others-option ${currentTab === 'outros' ? 'active' : ''}`}
                    onClick={() => categoryOptionHandler('1', 'outros')}
                    data-id="outros-link"
                  >
                    Outros
                  </li>
                  <li className={`anchor ${currentTab === 'portfolio' ? 'active' : ''}`}>
                    <Link
                      href="/portfolio"
                    >
                      Portfólio &nbsp;🚀
                    </Link>
                  </li>
                </ul>

                <div className="search-wrapper">
                  <div
                    className="search-icon"
                    onClick={() => {
                      props.onOpenSearchModal?.();
                      hideMobileMenu();
                    }}
                  >
                    <Image src={'/search-icon.png'} width={25} height={25} alt="kkk" />
                  </div>

                  <div className="google-wrapper">
                    {!currentUser.name ? (
                      <GoogleLogin
                        onError={() => console.log('Login failed')}
                        theme="filled_black"
                        size="large"
                        shape="square"
                        type="standard"
                        width="100"
                        text="signin"
                        onSuccess={credentialResponse => {
                          try {
                            if (credentialResponse?.credential) {
                              const user = jwtDecode<{
                                picture: string;
                                name: string;
                                email: string;
                              }>(credentialResponse.credential);

                              const { picture, name, email } = user;

                              callSetCurrentUser({
                                name,
                                picture,
                                email,
                              });

                              router.push('/profile');
                            } else {
                              console.log('No credential received');
                            }
                          } catch (error) {
                            console.error('Error decoding JWT or handling Google login:', error);
                          }
                        }}
                      />
                    ) : (
                      <Link className="profile" href="/profile">
                        Perfil
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <Image
              width={50}
              height={50}
              onClick={() => showMobileMenu()}
              className={`menu-hamburguer`}
              src={MENU_HAMBURGUER}
              alt="menu"
              data-id="open-sidebar-btn"
            />
          </nav>
        </div>
      </StyledHeader>
    </>
  );
};

export default Header;
