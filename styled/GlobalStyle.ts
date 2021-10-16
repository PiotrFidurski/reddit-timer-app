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

  ul {
    letter-spacing: 1.2px;
    font-size: clamp(1rem, 1.4vw, 1.3rem);
  }

  h2 {
    line-height: 1.8rem;
    font-size: clamp(1rem, 2vw, 1.6rem);
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
