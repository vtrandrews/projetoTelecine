import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html, body{
    overflow-x: hidden;
  }
  body {
    background-color: black;
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }
`;
 
export default GlobalStyle;