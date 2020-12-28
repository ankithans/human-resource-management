import React, { createContext, useReducer } from "react";
import axios from "axios";
import AuthReducer from "./AuthReducer";

// Initial state
const initialState = {
  isLoggedIn: false,
  loading: true,
};

// create context
export const AuthContext = createContext(initialState);

// Provider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  // actions
  async function adminLogin(admin) {
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const res = await axios.post("/api/v1/admin/login", admin, config);

      console.log(res);

      //   localStorage.setItem("token", res.data.token);

      //   dispatch({
      //     type: "ADMIN_LOGIN",
      //     payload: res.data,
      //   });
    } catch (err) {
      //   dispatch({
      //     type: "TRANSACTION_ERROR",
      //     payload: err.response.data.error,
      //   });
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
