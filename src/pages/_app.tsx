import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { SWRConfig } from 'swr';

const fetcher = (url: string) =>
  fetch(`https://pokeapi.co/api/v2${url}`).then((r) => r.json());

function MyApp({ Component, pageProps }: any) {
  return (
    <SWRConfig
      value={{
        fetcher,
      }}
    >
      <ThemeContextProvider>
        {(darkMode) => (
          <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <GlobalStyle />

            <Component {...pageProps} />
          </ThemeProvider>
        )}
      </ThemeContextProvider>
    </SWRConfig>
  );
}

export default MyApp;
