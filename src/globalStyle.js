import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }


  body{
    width: 100vw;
    height: 100vh;
    background-color: #333333;
    font-family: 'Lato', sans-serif;
    margin: 0;
    overflow-x: hidden;
  }

  input, button, textarea {
    border: none;
  }
  
`;

export default GlobalStyle;