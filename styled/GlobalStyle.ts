import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    scroll-behavior: smooth;
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
   background: ${({ theme: { background } }) => background.primary};
   color:  ${({ theme: { color } }) => color.default};
   line-height: 1.75rem;
   letter-spacing: 0.125rem;
   margin: 0 auto;
   height: 100vh;
   font-size: 1rem;
   overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: ${({ theme: { color } }) => color.secondary};
  }
`;

export default GlobalStyle;
