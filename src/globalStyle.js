import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  
  * {
    box-sizing: border-box;
  }


  body{
    height: 100%;
    background-color: #333333;
    font-family: 'Lato', sans-serif;
  }

  .root {
    display: flex;
    justify-content: center;
  }

  input, button, textarea {
    border: none;
  }
  
`;

export default GlobalStyle;