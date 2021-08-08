import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import App from "./containers/App";
import GlobalStyles from "./globalStyles";

axios.defaults.baseURL =
  "https://asia-northeast3-fu-webapp-dev.cloudfunctions.net/api";
axios.defaults.headers.post["Content-Type"] = "application/json";

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root"),
);
