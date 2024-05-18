// src/components/common/Header/Header.tsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuth } from '../../../context/AuthContext';
import LogoMarvel from '../LogoMarvel/LogoMarvel';
import {
  HeaderContainer,
  LogoContainer,
  Nav,
  NavItem,
  NavItems,
  MobileMenu,
  UserContainer,
  UserName
} from './Header.styles';

const Header: React.FC = () => {
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
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer>
      <LogoContainer>
        <LogoMarvel />
      </LogoContainer>
      <Nav>
        <NavItems>
          <NavItem to="/characters">Characters</NavItem>
          <NavItem to="/movies">Movies</NavItem>
          <NavItem to="/comics">Comics</NavItem>
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
      {mobileMenuOpen && (
        <MobileMenu>
          <NavItem to="/characters" onClick={toggleMobileMenu}>Characters</NavItem>
          <NavItem to="/movies" onClick={toggleMobileMenu}>Movies</NavItem>
          <NavItem to="/comics" onClick={toggleMobileMenu}>Comics</NavItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </MobileMenu>
      )}
    </HeaderContainer>
  );
};

export default Header;
