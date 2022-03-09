import React from "react";
import { ToastContainer } from "react-toastify";
import ReactDOM from "react-dom";

const TC: React.FC = () => {
  return (
    <ToastContainer
      position="bottom-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
  );
};

const Toast = () => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<TC />, document.getElementById("toast"))}
    </React.Fragment>
  );
};

export default Toast;
