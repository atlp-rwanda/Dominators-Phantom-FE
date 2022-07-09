import React from "react";
import reactDom from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { Provider } from "react-redux";
import store from "./module/store/store";
import RoleProvider from "./store/role-context/RoleProvider";
import PermissionProvider from "./store/permission-context/PermissionProvider";
import RoleDetailsProvider from "./store/role-details-context/RoleDetailsProvider";

const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    {/* <RoleProvider> */}
      {/* <RoleDetailsProvider> */}
        {/* <PermissionProvider> */}
          <BrowserRouter>
            <App />
          </BrowserRouter>
        {/* </PermissionProvider> */}
      {/* </RoleDetailsProvider> */}
    {/* </RoleProvider> */}
  </Provider>
);
