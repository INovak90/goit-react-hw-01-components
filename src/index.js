import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { App } from 'components/App';

const theme = {
  color: {
    white: '#fff',
    black: '#212121',
    red: '#ff0000',
    green: '#008000',
    gray: '#808080',
    background: '#a39d9d2e',
  },
  shadow: '0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2)',
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
