import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { createRoot } from "react-dom/client";
import { Provider } from 'react-redux';
import store from './redux/store';
import App from "./App";

const theme = createTheme({
  palette: {
    common: {
      white: "#ffffff" // ensure 'white' is defined
    }
    // rest of your theme configuration...
  }
});

const root = document.getElementById('root');
createRoot(root).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);