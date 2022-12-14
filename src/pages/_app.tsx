import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../theme';
import { ThemeContextProvider } from 'contexts/ThemeContext';
import { SWRConfig } from 'swr';
import { fetcher } from '@lib/fetchers';

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
