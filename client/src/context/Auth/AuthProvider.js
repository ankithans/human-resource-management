import React, { createContext, useReducer } from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";
import { useToasts } from "react-toast-notifications";

// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  loading: false,
  token: localStorage.getItem("token"),
};

// create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);
  const { addToast } = useToasts();

  // actions
  async function adminLogin(admin) {
    try {
      dispatch({
        type: "ADMIN_LOGIN_LOADING",
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/v1/admin/login", admin, config);

      console.log(res);

      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("token", res.data.token);

      addToast("Logged In Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });

      dispatch({
        type: "ADMIN_LOGIN",
        payload: res.data,
      });
      console.log(`Logged In ${res.data.userId}`);
    } catch (err) {
      addToast(err.response.data.error, {
        appearance: "error",
        autoDismiss: true,
      });

      dispatch({
        type: "LOGIN_ERROR",
        payload: err.response.data.error,
      });
    }
  }
  async function logout() {
    dispatch({
      type: "ADMIN_LOGIN_LOADING",
    });

    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("token");

    addToast("logged Out Successfully", {
      appearance: "success",
      autoDismiss: true,
    });

    dispatch({
      type: "ADMIN_LOGOUT",
    });
    console.log(`Logged Out Successfully`);
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        adminLogin,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
