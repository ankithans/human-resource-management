import React, { createContext, useReducer } from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";

// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") == "true" ? true : false,
  loading: false,
};

// create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

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

      dispatch({
        type: "ADMIN_LOGIN",
        payload: res.data,
      });
      console.log(`Logged In ${res.data.userId}`);
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        adminLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
