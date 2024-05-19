import * as React from "react";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from "react-dom";
import App from "./App";

const theme = createTheme();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);