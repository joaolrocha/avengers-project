// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';
import './fonts.css'; // Import the font configuration


const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Kastelov - Axiforma', 'Marvel', Arial, sans-serif;
    background-color: black;
    color: #333;
  }
`;

export default GlobalStyles;
