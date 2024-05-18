// src/components/common/Layout/Layout.styles.ts
import styled from 'styled-components';

export const LayoutContainer = styled.div `
  display: flex;
  width: 100%;
  height: 100vh;
  /* align-items: center; */
  /* justify-content: center; */
position: fixed;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ImageRectangle = styled.div`
width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    z-index: 2;

  & img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ImageAvengers = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  z-index: 1;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const ContentContainer = styled.div`
  /* position: relative; */
  width: 100%;
  z-index: 2;
`;
