import { createContext, FC, ReactElement, useContext, useMemo, useState } from 'react';

type ThemeModes = 'dark' | 'light';

interface ThemeModeContext {
  themeMode: ThemeModes;
  setThemeMode: (newThemeMode: ThemeModes) => void;
}

interface ThemeModeProviderProps {
  children: ReactElement;
}

const defaultValue: ThemeModeContext = {
  setThemeMode: () => {},
  themeMode: 'dark',
};

interface ValueToCalclate<V1, V2> {
  dark: V1;
  light: V2;
}

const themeModeContext = createContext(defaultValue);

export const useThemeMode = () => {
  return useContext(themeModeContext);
};

export const ThemeModeProvider: FC<ThemeModeProviderProps> = ({ children }) => {
  const [themeMode, setThemeMode] = useState<ThemeModes>('dark');

  const value = useMemo(() => ({ themeMode, setThemeMode }), [themeMode]);

  return <themeModeContext.Provider value={value}>{children}</themeModeContext.Provider>;
};

export const useCalculateByThemeMode = () => {
  const { themeMode } = useThemeMode();

  const alculateValueByThemeMode = <V1, V2>(valueToCalclate: ValueToCalclate<V1, V2>) => {
    return valueToCalclate[themeMode];
  };

  return alculateValueByThemeMode;
};
