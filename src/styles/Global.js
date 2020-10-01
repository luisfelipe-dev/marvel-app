import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    vertical-align: baseline;
    box-sizing: border-box;
  }

  body{
    position: relative;
    background: #fff;
    font-family: 'Roboto Condensed', sans-serif;
  }  
`;

export default GlobalStyles;
