import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { Navbar } from "../shared/Navbar";
import { Header } from "../shared/Header";
import { AdminHome } from "./AdminHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddEmployee } from "./AddEmployee";
import { EditEmployee } from "./EditEmployee";

export const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar signOut={logout} />
      <Header />

      <Router>
        <Switch>
          <Route path='/admin' exact component={AdminHome} />
          <Route path='/admin/addEmployee'>
            <AddEmployee
              props={{
                name: "",
                email: "",
                password: "",
                role: "",
                team: "",
                salary: "",
                update: false,
              }}
            />
          </Route>
          <Route path='/admin/editEmployee/:id'>
            <EditEmployee
              props={{
                name: "",
                email: "",
                password: "",
                role: "",
                team: "",
                salary: "",
                update: false,
              }}
            />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};
