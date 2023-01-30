import React from "react";
import ReactDom from "react-dom";
import { CookiesProvider } from "react-cookie";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { RouteContainer } from "../Containers/Routes";
import store from "../redux/store";
import { ThemeProvider } from "@mui/material";
import theme from "../theme";

const App = () => {
  console.log("app");
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <CookiesProvider>
          <BrowserRouter>
            <RouteContainer></RouteContainer>
          </BrowserRouter>
        </CookiesProvider>
      </Provider>
    </ThemeProvider>
  );
};
export default App;
