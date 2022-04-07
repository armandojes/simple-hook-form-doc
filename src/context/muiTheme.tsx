import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { FC, ReactElement } from 'react';
import { useDarkMode } from './darkMode';

const darkTheme = createTheme({
  palette: {
    primary: {
      main: '#081229',
    },
  },
});

const lightTheme = createTheme({
  palette: {
    primary: {
      main: '#081229',
    },
  },
});

interface Props {
  children: ReactElement;
}

const MuiThemeProvider: FC<Props> = ({ children }) => {
  const { darkMode } = useDarkMode();
  const resposnive = responsiveFontSizes(darkMode ? darkTheme : lightTheme);

  return <ThemeProvider theme={resposnive}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
