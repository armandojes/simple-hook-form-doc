import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { StyledEngineProvider } from '@mui/styled-engine';
import Header from './components/header';
import MuiThemeProvider from './context/muiTheme';
import Docs from './pages/docs';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <StyledEngineProvider injectFirst>
        <MuiThemeProvider>
          <SnackbarProvider maxSnack={3}>
            <>
              <CssBaseline />
              <Header />
              <Routes>
                <Route element={<Home />} path="/" />
                <Route element={<Docs />} path="/docs" />
              </Routes>
            </>
          </SnackbarProvider>
        </MuiThemeProvider>
      </StyledEngineProvider>
    </BrowserRouter>
  );
}

export default App;
