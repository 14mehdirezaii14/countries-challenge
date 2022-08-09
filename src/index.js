import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import RenderRouter from "./RenderRouter";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import store from "./Redux/store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeProvider attribute="class">
      <RenderRouter />
    </ThemeProvider>
  </Provider>
);

