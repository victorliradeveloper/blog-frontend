import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, LayoutGroup } from 'framer-motion'
import Image from 'next/image'
import { GoogleLogin } from '@react-oauth/google'
import { jwtDecode } from 'jwt-decode'
import { useCurrentUser } from '@/Context/currentUser'
import { CODE_ICON } from '@/constants/images'

// Types
interface NavItem {
  label: string
  path: string
  category?: string
}

interface NewHeaderProps {
  onOpenSearchModal?: () => void
  onResetSearch?: () => void
}

// Constants
const NAV_ITEMS: NavItem[] = [
  { label: 'home', path: '/', category: '' },
  { label: 'frontend', path: '/', category: 'frontend' },
  { label: 'backend', path: '/', category: 'backend' },
  { label: 'avançado', path: '/', category: 'avancado' },
  { label: 'portfolio', path: '/', category: 'portfolio' },
]

// Utils
const buildNavPath = (item: NavItem): string => {
  if (item.label === 'portfolio') {
    return '/portfolio'
  }
  if (item.category) {
    return `${item.path}?page=1&category=${item.category}`
  }
  return item.path
}

export default function Navbar(props: NewHeaderProps) {
  const router = useRouter()
  const [hovered, setHovered] = useState<string>('')
  const { callSetCurrentUser, currentUser } = useCurrentUser()

  const handleHoverStart = (label: string) => setHovered(label)
  const handleHoverEnd = () => setHovered('')

  return (
    <LayoutGroup>
      <Header>
        <Container>
          <Logo onClick={() => router.push('/')}>
            <Image
              width={30}
              height={36}
              src={CODE_ICON}
              alt="header icon"
            />
          </Logo>
          
          <Nav>
            <List>
              {NAV_ITEMS.map(item => {
                const path = buildNavPath(item)
                const isHovered = hovered === item.label
                
                // Verifica se o item está ativo baseado no pathname e query params
                let isActive = false
                if (item.label === 'portfolio') {
                  isActive = router.pathname === '/portfolio'
                } else if (item.label === 'home') {
                  isActive = router.pathname === '/' && !router.query.category
                } else if (item.category) {
                  isActive = router.pathname === '/' && router.query.category === item.category
                }

                return (
                  <li key={item.label}>
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
                  </li>
                )
              })}
            </List>
          </Nav>

          <SearchAndLogin>
            <SearchIcon onClick={props.onOpenSearchModal}>
              <Image src="/search-icon.png" width={20} height={20} alt="search" />
            </SearchIcon>
            
            <GoogleWrapper>
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
                <ProfileLink href="/profile">
                  Perfil
                </ProfileLink>
              )}
            </GoogleWrapper>
          </SearchAndLogin>
        </Container>
      </Header>
    </LayoutGroup>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: black;
  color: white;
  font-size: 12px;
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  top: 0px;
  margin: 0;
  padding: 0;
  height: 88px;
`

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`

const Logo = styled.div`
  cursor: pointer;
  margin-right: 20px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: inline-flex;
  position: relative;
  top: 5px;
  overflow: hidden;
  
  
  @media (min-width: 640px) {
    justify-content: space-around;
  }
`



const Nav = styled.nav`
  text-align: center;
  flex: 1;
  order: 2;
  flex-basis: 100%;
  
  @media (min-width: 768px) {
    order: 0;
    flex-basis: initial;
  }
`

const Anchor = styled.a`
  border: 0;
  position: relative;
  text-decoration: none;
  color: inherit;
  

`

const NavContainer = styled(motion.span)<{ $isActive: boolean }>`
  color: ${props => props.$isActive ? '#ffffff' : '#a0a0a0'};
  cursor: pointer;
  display: inline-block;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 1.2px;
  padding: 20px;
  text-decoration: none;
  text-transform: uppercase;
  position: relative;
  
  &:hover {
    color: #ffffff;
  }
  
  &::after {
    content: "";
    position: absolute;
    margin: 0px auto;
    top: 44px;
    left: 0px;
    right: 0px;
    height: 1px;
    width: 20px;
    background: rgb(255, 255, 255);
    opacity: ${props => props.$isActive ? 1 : 0};
  }
`

const NavHovered = styled(motion.span)`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  z-index: -1;
  overflow-y: hidden !important;
`

const SearchAndLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`

const SearchIcon = styled.div`
  border: 2px solid #07ebb0;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(7, 235, 176, 0.1);
  }
`

const GoogleWrapper = styled.div`
  height: auto;
  position: relative;
`

const ProfileLink = styled(Link)`
  border: 2px solid #fff;
  padding: 5px 20px;
  border-radius: 4px;
  color: #fff;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  top: 8px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
`