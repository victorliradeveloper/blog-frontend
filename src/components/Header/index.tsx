import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { LayoutGroup } from 'framer-motion';
import Image from 'next/image';
// import { GoogleLogin } from '@react-oauth/google';
// import { jwtDecode } from 'jwt-decode';
// import { useCurrentUser } from '@/Context/currentUser';
import { CODE_ICON, CLOSE_MENU_ICON, MENU_HAMBURGUER } from '@/constants/images';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  Header,
  Container,
  Logo,
  Nav,
  List,
  ListItem,
  Anchor,
  NavContainer,
  NavHovered,
  SearchAndLogin,
  SearchIcon,
  HamburgerMenu,
  MobileMenu,
  CloseButton,
  MobileMenuContent,
  MobileSearchAndLogin,
} from './Header.styled';

// Types
interface NavItem {
  label: string;
  path: string;
  category?: string;
}

interface HeaderProps {
  onOpenSearchModal?: () => void;
  onResetSearch?: () => void;
  openMobileMenu?: boolean;
  setOpenMobileMenu?: (open: boolean) => void;
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: 'home', path: '/', category: '' },
  { label: 'frontend', path: '/', category: 'frontend' },
  { label: 'backend', path: '/', category: 'backend' },
  { label: 'about me', path: '/portfolio' },
];

// Utils
const buildNavPath = (item: NavItem): string => {
  if (item.category) {
    return `${item.path}?page=1&category=${item.category}`;
  }
  return item.path;
};

export default function Navbar(props: HeaderProps) {
  const router = useRouter();
  const [hovered, setHovered] = useState<string>('');
  // const { callSetCurrentUser, currentUser } = useCurrentUser();
  const [headerFadeDown, setHeaderFadeDown] = useState('fade-down');

  useEffect(() => {
    AOS.init();
    const updateWindowWidth = () => {
      if (window.innerWidth < 700) {
        setHeaderFadeDown('');
      }
    };
    updateWindowWidth();
  }, []);

  const handleHoverStart = (label: string) => setHovered(label);
  const handleHoverEnd = () => setHovered('');

  const showMobileMenu = () => {
    props.setOpenMobileMenu?.(true);
  };

  const hideMobileMenu = () => {
    props.setOpenMobileMenu?.(false);
  };

  return (
    <LayoutGroup>
      <Header data-aos={headerFadeDown}>
        <Container>
          <Logo onClick={() => router.push('/')}>
            <Image width={30} height={34} src={CODE_ICON} alt="header icon" />
          </Logo>

          <Nav>
            <List>
              {NAV_ITEMS.map(item => {
                const path = buildNavPath(item);
                const isHovered = hovered === item.label;

                let isActive = false;
                if (item.path === '/portfolio') {
                  isActive = router.pathname === '/portfolio';
                } else if (item.label === 'home') {
                  isActive = router.pathname === '/' && !router.query.category;
                } else if (item.category) {
                  isActive = router.pathname === '/' && router.query.category === item.category;
                }

                return (
                  <ListItem key={item.label}>
                    <Link href={path} passHref legacyBehavior>
                      <Anchor>
                        <NavContainer
                          onHoverStart={() => handleHoverStart(item.label)}
                          onHoverEnd={handleHoverEnd}
                          $isActive={isActive}
                        >
                          {isHovered && (
                            <NavHovered
                              layoutId="nav"
                              initial={{ opacity: 1 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 1 }}
                            />
                          )}
                          {item.label}
                        </NavContainer>
                      </Anchor>
                    </Link>
                  </ListItem>
                );
              })}
            </List>
          </Nav>

          <SearchAndLogin>
            <SearchIcon onClick={props.onOpenSearchModal}>
              <Image src="/search-icon.png" width={20} height={20} alt="search" />
            </SearchIcon>

            {/* <GoogleWrapper>
              {!currentUser.name ? (
                <GoogleLogin
                  onError={() => console.log('Login failed')}
                  theme="filled_black"
                  size="medium"
                  shape="pill"
                  type="icon"
                  width="50"
                  text="signin"
                  locale="en"
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
                <ProfileLink href="/profile">Perfil</ProfileLink>
              )}
            </GoogleWrapper> */}
          </SearchAndLogin>

          <HamburgerMenu onClick={showMobileMenu}>
            <Image width={30} height={20} src={MENU_HAMBURGUER} alt="menu" />
          </HamburgerMenu>
        </Container>

        <MobileMenu $isOpen={!!props.openMobileMenu}>
          <CloseButton onClick={hideMobileMenu}>
            <Image width={20} height={20} src={CLOSE_MENU_ICON} alt="close menu" />
          </CloseButton>

          <MobileMenuContent>
            <List>
              {NAV_ITEMS.map(item => {
                const path = buildNavPath(item);

                // Verifica se o item está ativo baseado no pathname e query params
                let isActive = false;
                if (item.path === '/portfolio') {
                  isActive = router.pathname === '/portfolio';
                } else if (item.label === 'home') {
                  isActive = router.pathname === '/' && !router.query.category;
                } else if (item.category) {
                  isActive = router.pathname === '/' && router.query.category === item.category;
                }

                return (
                  <ListItem key={item.label}>
                    <Link href={path} passHref legacyBehavior>
                      <Anchor onClick={hideMobileMenu}>
                        <NavContainer $isActive={isActive}>{item.label}</NavContainer>
                      </Anchor>
                    </Link>
                  </ListItem>
                );
              })}
            </List>

            <MobileSearchAndLogin>
              <SearchIcon
                onClick={() => {
                  props.onOpenSearchModal?.();
                  hideMobileMenu();
                }}
              >
                <Image src="/search-icon.png" width={20} height={20} alt="search" />
              </SearchIcon>

              {/* <GoogleWrapper>
                {!currentUser.name ? (
                  <GoogleLogin
                    onError={() => console.log('Login failed')}
                    theme="filled_black"
                    size="medium"
                    shape="pill"
                    type="standard"
                    width="50"
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
                  <ProfileLink href="/profile">Perfil</ProfileLink>
                )}
              </GoogleWrapper> */}
            </MobileSearchAndLogin>
          </MobileMenuContent>
        </MobileMenu>
      </Header>
    </LayoutGroup>
  );
}
