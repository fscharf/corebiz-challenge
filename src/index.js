import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";
import "react-toastify/dist/ReactToastify.css";
import "./assets/css/App.min.css";
import "bootstrap/dist/js/bootstrap";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
