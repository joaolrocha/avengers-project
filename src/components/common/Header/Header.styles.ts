// src/components/common/Header/Header.styles.ts
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: black;
  border-bottom: 3px solid red;
  padding: 10px 20px;
  position: relative;
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  padding: 0 15px;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
  &:hover {
    color: red;
  }
`;

export const MobileMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  position: absolute;
  top: 60px;
  left: 0;
  width: 100%;
  border-bottom: 3px solid red;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const UserName = styled.span`
  color: white;
  margin-left: 10px;
  font-family: 'Kastelov - Axiforma', Arial, sans-serif;
`;
