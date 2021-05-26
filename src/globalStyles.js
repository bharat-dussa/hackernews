import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    overflow:hidden;
    body {
        @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
        margin:0;
        padding:0;
        scroll-behavior:smooth;
        text-rendering: optimizeLegibility;
        font-family: Open Sans, sans-serif;
        --primary-color:#FBC91B;
        --grey-color:#F2F2F2;
        --black-text:#000000;
        --grey-text:#000;
        --font-main: Open Sans, sans-serif;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
    }
    *, *::after, *::before {
    box-sizing: border-box;
  }

  footer{
    margin-top: auto;
  }
`;

export default GlobalStyle;