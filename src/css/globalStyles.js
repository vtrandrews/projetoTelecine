import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  html{
    @media(max-width: 1440px){

    }
    @media(max-width: 375px){
      
    }
  }
  body {
    background-color: black;
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }
`;
 
export default GlobalStyle;