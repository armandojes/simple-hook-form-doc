import { CssBaseline } from '@mui/material';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import MuiThemeProvider from './context/muiTheme';
import Home from './pages/home';

function App() {
  return (
    <BrowserRouter>
      <MuiThemeProvider>
        <>
          <CssBaseline />
          <Header />
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </>
      </MuiThemeProvider>
    </BrowserRouter>
  );
}

export default App;
