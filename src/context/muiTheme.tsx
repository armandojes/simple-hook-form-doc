import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material/styles';
import { FC, ReactElement } from 'react';

const theme = createTheme({
  palette: {
    primary: {
      main: '#081229',
    },
  },
});

const resposnive = responsiveFontSizes(theme);

interface Props {
  children: ReactElement;
}

const MuiThemeProvider: FC<Props> = ({ children }) => {
  return <ThemeProvider theme={resposnive}>{children}</ThemeProvider>;
};

export default MuiThemeProvider;
