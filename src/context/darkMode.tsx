import { createContext, FC, ReactElement, useContext, useMemo, useState } from 'react';

interface DarkModeCOntext {
  darkMode: boolean;
  setDarkMode: (newThemeMode: boolean) => void;
}

interface ThemeModeProviderProps {
  children: ReactElement;
}

const defaultValue: DarkModeCOntext = {
  setDarkMode: () => {},
  darkMode: true,
};

const darkModeContext = createContext(defaultValue);

export const useDarkMode = () => {
  return useContext(darkModeContext);
};

export const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  const value = useMemo(() => ({ darkMode, setDarkMode }), [darkMode]);

  return <darkModeContext.Provider value={value}>{children}</darkModeContext.Provider>;
};
