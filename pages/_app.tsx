import GlobalStyle from '@styled/GlobalStyle';
import theme from '@styled/theme';
import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
