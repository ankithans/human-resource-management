import React, { createContext, useReducer } from "react";
import axios from "axios";
import AdminReducer from "./AdminReducer";
import { useToasts } from "react-toast-notifications";

// Initial state
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") === "true" ? true : false,
  loading: false,
  employees: [],
  employee: {},
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

      //   addToast("Employee Data loaded Successfully!", {
      //     appearance: "success",
      //     autoDismiss: true,
      //   });

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

  async function addEmployee(employee) {
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
      const res = await axios.post(
        "/api/v1/admin/addEmployee",
        employee,
        config
      );

      console.log(res.data.data);

      addToast(res.data.message, {
        appearance: "success",
        autoDismiss: true,
      });

      dispatch({
        type: "EMPLOYEE_ADDED",
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

  async function updateEmployee(employee, id) {
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
      const res = await axios.put(
        "/api/v1/admin/employee/id",
        employee,
        config
      );

      console.log(res.data.data);

      addToast(res.data.message, {
        appearance: "success",
        autoDismiss: true,
      });

      dispatch({
        type: "EMPLOYEE_ADDED",
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

  async function getEmployeeById(id) {
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
      const res = await axios.get(`/api/v1/admin/employee/${id}`, config);

      console.log(res.data.employee);

      //   addToast("Employee Data loaded Successfully!", {
      //     appearance: "success",
      //     autoDismiss: true,
      //   });

      dispatch({
        type: "EMPLOYEE_LOADED",
        payload: res.data.employee,
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
        employee: state.employee,
        getAllEmployees,
        addEmployee,
        updateEmployee,
        getEmployeeById,
      }}
    >
      {children}
    </AdminContext.Provider>
  );
};
