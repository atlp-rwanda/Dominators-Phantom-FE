import React from "react";
import reactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import { createStore } from "redux"; //
import allReducers from "./redux/reducers"; //
import { Provider } from "react-redux"; //

const root = reactDom.createRoot(document.getElementById("root"));

const store = createStore(
  allReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //


root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);


