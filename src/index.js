import React from "react";
import reactDom from "react-dom/client";
import App from "./app";
import { BrowserRouter } from "react-router-dom";
// import "./style.css";
const root = reactDom.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
