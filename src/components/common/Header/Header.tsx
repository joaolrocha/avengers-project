// src/components/common/Header/Header.tsx
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import LogoMarvel from '../LogoMarvel/LogoMarvel';
import {
  HeaderContainer,
  LogoContainer,
  MobileMenu,
  Nav,
  NavItem,
  NavItems,
  UserContainer,
  UserName
} from './Header.styles';

const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { logout, user } = useAuth();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    handleMenuClose();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <LogoMarvel />
        </LogoContainer>
        <Nav>
          <NavItems>
            <NavItem to="/home" active={location.pathname === '/home'}>Personagens</NavItem>
            <NavItem to="/movies" active={location.pathname === '/movies'}>Filmes</NavItem>
            <NavItem to="/comics" active={location.pathname === '/comics'}>HQs</NavItem>
          </NavItems>
          <UserContainer onClick={handleMenuClick}>
            <Avatar alt="User Avatar" src="/path/to/avatar.jpg" />
            <UserName>{user}</UserName>
          </UserContainer>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
          <IconButton
            color="inherit"
            aria-label="menu"
            onClick={toggleMobileMenu}
            sx={{ display: { md: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
        </Nav>
      </HeaderContainer>
      <MobileMenu isOpen={mobileMenuOpen}>
        <NavItem to="/home" active={location.pathname === '/home'} onClick={toggleMobileMenu}>Personagens</NavItem>
        <NavItem to="/movies" active={location.pathname === '/movies'} onClick={toggleMobileMenu}>Filmes</NavItem>
        <NavItem to="/comics" active={location.pathname === '/comics'} onClick={toggleMobileMenu}>HQs</NavItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MobileMenu>
    </>
  );
};

export default Header;

