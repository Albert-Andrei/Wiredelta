import { createContext, PropsWithChildren, useContext, useState } from 'react';

export interface ThemeContextValues {
  darkMode: boolean;
  onSwitchDarkMode: () => void;
}

interface ThemeContextProviderProps {
  children: (darkMode: boolean) => React.ReactNode;
}

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  const handleDarkModeSwitch = () => {
    setDarkMode((prev) => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        onSwitchDarkMode: handleDarkModeSwitch,
      }}
    >
      {children(darkMode)}
    </ThemeContext.Provider>
  );
};

export const ThemeContext = createContext<ThemeContextValues>(
  {} as ThemeContextValues,
);

export const useThemeContext = () => useContext(ThemeContext);
export const useDarkMode = () => useContext(ThemeContext).darkMode;
