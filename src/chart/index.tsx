
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import '../../mocks/index';
const root = ReactDOM.createRoot(document.getElementById("app") as HTMLElement);
root.render(
  <App></App>
  // <React.StrictMode>
  //   <App></App>
  // </React.StrictMode>
);