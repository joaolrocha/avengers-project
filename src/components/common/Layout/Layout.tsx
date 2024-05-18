// src/components/common/Layout/Layout.tsx
import React, { ReactNode } from 'react';
import avengersImage from '../../../assets/images/imgavengers.png';
import rectangle from '../../../assets/images/retangulocinza.png';
import { ContentContainer, ImageAvengers, ImageRectangle, LayoutContainer } from './Layout.styles';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <LayoutContainer >
      <ImageRectangle>
        <img src={rectangle} alt="" />
      </ImageRectangle>

      <ImageAvengers>
        <img src={avengersImage} alt="" />
      </ImageAvengers>
      <ContentContainer>
        {children}
      </ContentContainer>
    </LayoutContainer>
  );
};

export default Layout;