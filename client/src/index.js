import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { AuthProvider } from "./context/Auth/AuthProvider";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(
  <React.StrictMode>
    <ToastProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ToastProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
