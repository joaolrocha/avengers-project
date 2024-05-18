// src/views/Loading/Loading.styles.ts
import styled, { css } from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: black;
`;

export const LogoContainer = styled.div<{ showLogo: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: all 1s ease;

  ${({ showLogo }) =>
    !showLogo &&
    css`
      justify-content: flex-start;
      padding-left: 20px;
    `}
`;

export const Logo = styled.img`
  max-width: 200px;
  max-height: 200px;
`;
