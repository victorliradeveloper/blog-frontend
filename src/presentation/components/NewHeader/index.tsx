import styled from 'styled-components'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, LayoutGroup } from 'framer-motion'

// Types
interface NavItem {
  label: string
  path: string
  category?: string
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

export default function Navbar() {
  const router = useRouter()
  const [hovered, setHovered] = useState<string>('')

  const handleHoverStart = (label: string) => setHovered(label)
  const handleHoverEnd = () => setHovered('')

  return (
    <LayoutGroup>
      <Header>
        <Nav>
          <List>
            {NAV_ITEMS.map(item => {
              const path = buildNavPath(item)
              const isHovered = hovered === item.label
              const isActive = router.pathname === path

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