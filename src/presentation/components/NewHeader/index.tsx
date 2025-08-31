import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, LayoutGroup } from 'framer-motion'

export default function Navbar() {
  const router = useRouter()
  const pages = [
    'About',
    'Articles',
    'Projects',
    'Talks',
    'Podcasts',
    'Investing',
    'Uses',
    'Reminder',
  ]
  const [hovered, setHovered] = useState('')

  return (
    <LayoutGroup>
      <Header>
        <Nav>
          <List>
            {pages.map(page => {
              const path = `/${page.toLowerCase()}`
              const isHovered = hovered === page

              return (
                <li key={page}>
                  <Link href={path} passHref legacyBehavior>
                    <Anchor>
                      <NavContainer
                        onHoverStart={() => setHovered(page)}
                        onHoverEnd={() => setHovered('')}
                        $isActive={router.pathname === path}
                      >
                        {isHovered && (
                          <NavHovered
                            layoutId="nav"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                          />
                        )}
                        {page}
                      </NavContainer>
                    </Anchor>
                  </Link>
                </li>
              )
            })}
          </List>
        </Nav>
      </Header>
    </LayoutGroup>
  )
}

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 12px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 3;
  width: 100%;
  max-width: 1200px;
  top: 100px;
  margin: 0;
  padding: 0;
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

const ButtonHeader = styled.div`
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: white;
  cursor: pointer;
  height: 34px;
  padding: 0 10px;
  transition: background 0.2s ease-in-out;
  
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }
`

const Icon = styled.i`
  font-size: 24px;
  line-height: 32px;
`

const ButtonLogo = styled(ButtonHeader)`
  font-weight: 700;
  font-size: 32px;
  text-decoration: none;
  margin-left: 12px;
  font-family: 'Inter', sans-serif;
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

const Aside = styled.div`
  display: flex;
  align-items: center;
  padding-right: 12px;
  margin-left: auto;
`

const Anchor = styled.a`
  border: 0;
  position: relative;
  text-decoration: none;
  color: inherit;
  
  &:hover, &:focus {
    opacity: 1;
  }
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
  transition: color 0.2s ease-in-out;
  position: relative;
  
  &:hover {
    color: #ffffff;
  }
  
  &::after {
    content: "";
    position: absolute;
    margin: 0px auto;
    top: 18px;
    left: 0px;
    right: 0px;
    height: 1px;
    width: 20px;
    background: rgb(255, 255, 255);
    opacity: ${props => props.$isActive ? 1 : 0};
    transition: opacity 0.2s ease-in-out;
  }
`

const NavHovered = styled(motion.span)`
  position: absolute;
  top: 0px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  z-index: -1;
  transition: 0.1s ease-out;
  overflow-y: hidden !important;
`