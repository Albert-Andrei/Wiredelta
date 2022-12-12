import { createContext, useContext } from 'react';

export interface DarkModeProps {
  darkMode: boolean;
  setDarkMode: (e?: any) => void;
}

export const DarkMode = createContext<DarkModeProps>({
  darkMode: true,
  setDarkMode: () => {},
});

export const useDarkMode = () => useContext(DarkMode);
