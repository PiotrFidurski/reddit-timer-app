import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
 @font-face {
   font-family: 'Ubuntu';
   src: url("/assets/fonts/Ubuntu-Medium.woff2") format("woff2"), url("/assets/fonts/Ubuntu-Medium.woff") format("woff");
   font-style: normal;
 }
 
  * {
    box-sizing: border-box;
  }

  ul {
    white-space: pre;
    font-size: clamp(1rem, 1.4vw, 1.3rem);
  }

  h1 {
    font-size: clamp(1.5rem, 2vw, 3rem);
    line-height: clamp(1.75rem, 3vw, 4rem);
    font-weight: 500;
  }

  h2 {
    line-height: clamp(1.8rem, 2vw, 2.5rem);
    font-size: clamp(1.4rem, 2vw, 2.5rem);
    font-weight: 500;
  }

  body {
   font-family: "Ubuntu", sans-serif;
   background: ${(props) => props.theme.background.primary};
   color:  ${(props) => props.theme.color.default};
   line-height: 1.75rem;
   letter-spacing: 0.125rem;
   margin: 0 auto;
   min-height: 100vh;
   font-size: 1rem;
   min-width: 390px;
   width: 100%;
   max-width: 100%;
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.color.secondary};
  }
`;

export default GlobalStyle;
