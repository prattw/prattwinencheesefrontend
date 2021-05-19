import React from "react";
import ReactDOM from "react-dom";
import "./styles.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import "./fonts/FogCityGothic-Regular.otf";
ReactDOM.render(
  <Router>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Router>,
  document.getElementById("root")
);

reportWebVitals();