import React, { createContext, useReducer } from "react";
import axios from "axios";
import AdminReducer from "./AdminReducer";
import { useToasts } from "react-toast-notifications";

// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  loading: false,
  employees: [],
};

// create context
export const AdminContext = createContext(initialState);

// Provider component
export const AdminProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AdminReducer, initialState);
  const { addToast } = useToasts();

  // actions
  async function getAllEmployees() {
    try {
      dispatch({
        type: "EMPLOYEES_LOADING",
      });
      const config = {
        headers: {
          "Content-Type": "application/json",
          "x-auth-token": localStorage.getItem("token"),
        },
      };
      const res = await axios.get("/api/v1/admin/getAllEmployees", config);

      console.log(res.data.employees);

      addToast("Employee Data loaded Successfully!", {
        appearance: "success",
        autoDismiss: true,
      });

      dispatch({
        type: "EMPLOYEES_LOADED",
        payload: res.data.employees,
      });
    } catch (err) {
      addToast(err.response.data.error, {
        appearance: "error",
        autoDismiss: true,
      });

      dispatch({
        type: "ERROR",
        payload: err.response.data.error,
      });
    }
  }

  return (
    <AdminContext.Provider
      value={{
        isLoggedIn: state.isLoggedIn,
        loading: state.loading,
        employees: state.employees,
        getAllEmployees,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
