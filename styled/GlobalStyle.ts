import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Ubuntu medium */
 @font-face {
   font-family: 'Ubuntu';
   src: url("/assets/fonts/Ubuntu-Medium.woff2") format("woff2"), url("/assets/fonts/Ubuntu-Medium.woff") format("woff");
   font-style: normal;
 }

  * {
    box-sizing: border-box;
  }

  body {
   font-family:"Ubuntu", sans-serif;
   background: ${(props) => props.theme.background.darker};
   color: white;
   line-height: 1.75rem;
   font-size: 1rem;
  }

  a {
    text-decoration: none;
    color: #bbc0db;
  }
`;

export default GlobalStyle;
