import { FC, ReactElement, useMemo } from 'react';
import { ThemeProvider } from 'styled-components';
import { useDarkMode } from './darkMode';

interface Props {
  children: ReactElement;
}

const StyledThemeProvider: FC<Props> = ({ children }) => {
  const { darkMode } = useDarkMode();

  const theme = useMemo(() => ({ darkMode }), [darkMode]);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default StyledThemeProvider;
