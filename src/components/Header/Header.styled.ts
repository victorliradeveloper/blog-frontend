'use client';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface MobileMenuProps {
  $isOpen: boolean;
}

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 12px;
  position: fixed;
  left: 0;
  right: 0;
  z-index: 3;
  width: 100%;
  top: 0px;
  margin: 0;
  padding: 0;
  height: 80px;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  padding: 0 20px;
`;

export const Logo = styled.div`
  cursor: pointer;
  margin-right: 20px;
`;

export const List = styled.ul`
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

  @media screen and (max-width: 700px) {
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;

export const ListItem = styled.li`
  list-style: none;
`;

export const Nav = styled.nav`
  text-align: center;
  flex: 1;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Anchor = styled.a`
  border: 0;
  position: relative;
  text-decoration: none;
  color: inherit;
`;

export const NavContainer = styled(motion.span)<{ $isActive: boolean }>`
  color: ${props => (props.$isActive ? '#ffffff' : '#a0a0a0')};
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
    content: '';
    position: absolute;
    margin: 0px auto;
    top: 44px;
    left: 0px;
    right: 0px;
    height: 1px;
    width: 20px;
    background: rgb(255, 255, 255);
    opacity: ${props => (props.$isActive ? 1 : 0)};
  }
`;

export const NavHovered = styled(motion.span)`
  position: absolute;
  top: 8px;
  left: 0;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  border-radius: 8px;
  z-index: -1;
  overflow-y: hidden !important;
`;

export const SearchAndLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const SearchIcon = styled.div`
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
`;

export const HamburgerMenu = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div<MobileMenuProps>`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    transform: translateX(${props => (props.$isOpen ? '0' : '-100%')});
    transition: transform 0.3s ease;
  }
`;

export const CloseButton = styled.div`
  display: none;

  @media screen and (max-width: 700px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
    z-index: 1001;
  }
`;

export const MobileMenuContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
`;

export const MobileSearchAndLogin = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 20px;
  position: absolute;
  top: 50px;
`;
