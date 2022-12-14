/* eslint-disable  */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { ThemeModeProvider } from './context/darkMode';
import StyledThemeProvider from './context/styledThemeMode';

ReactDOM.render(
  <React.StrictMode>
    <ThemeModeProvider>
      <StyledThemeProvider>
        <App />
      </StyledThemeProvider>
    </ThemeModeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
