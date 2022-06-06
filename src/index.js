import React from "react";
import reactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { Provider } from "react-redux";
import store from "./module/store/store";
import RoleProvider from "./store/role-context/RoleProvider";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <RoleProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>{" "}
    </RoleProvider>
  </Provider>
);
