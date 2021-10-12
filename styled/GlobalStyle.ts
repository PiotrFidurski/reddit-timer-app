import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Source Code Pro regular */
  @font-face {
    font-family: 'Source Code Pro', monospace;
    font-weight: 400;
    src: url("/fonts/SourceCodePro-Regular.woff") url("/fonts/SourceCodePro-Regular.woff2");
  }

  * {
    box-sizing: border-box;
  }

  body {
   font-family: ${(props) => props.theme.font.family.default};
  }

  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
