import "./assets/scss/app.scss";
import "react-toastify/dist/ReactToastify.css";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { SiteInfoProvider } from "./store/SiteInfo";
import { AuthProvider } from "./store/Auth";
import axios from "axios";
import Toast from "./components/UI/Toasts";
import { CartProvider } from "./store/Cart";
const token = localStorage.getItem("token");
axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <SiteInfoProvider>
          <CartProvider>
            <App />
          </CartProvider>
          <Toast />
        </SiteInfoProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
