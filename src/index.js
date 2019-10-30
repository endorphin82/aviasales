import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider } from "styled-components";
import * as serviceWorker from "./serviceWorker";
import { Provider } from "react-redux";
import App from "./App";
import store from "./store";
import { themeDefaultColors } from "./theme/globalStyle";

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={themeDefaultColors}>
      <App/>
    </ThemeProvider>
  </Provider>
  , document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
