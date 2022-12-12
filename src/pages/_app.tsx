import '../styles/globals.css';
import GlobalStyle from '../styles/global';
import { ThemeProvider } from 'styled-components';
import { useState } from 'react';
import { lightTheme, darkTheme } from '../theme';
import { DarkMode } from '@hooks/useDarkMode';

function MyApp({ Component, pageProps }: any) {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Component {...pageProps} />
      </ThemeProvider>
    </DarkMode.Provider>
  );
}

export default MyApp;
