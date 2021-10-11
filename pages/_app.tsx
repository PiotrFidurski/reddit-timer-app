import GlobalStyle from '@styled/GlobalStyle';
import type { AppProps } from 'next/app';
import { Normalize } from 'styled-normalize';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
