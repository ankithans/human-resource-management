import React, { useContext } from "react";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { Navbar } from "../shared/Navbar";
import { Header } from "../shared/Header";
import { AdminHome } from "./AdminHome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AddEmployee } from "./AddEmployee";

export const AdminDashboard = () => {
  const { logout } = useContext(AuthContext);
  return (
    <div>
      <Navbar signOut={logout} />
      <Header />

      <Router>
        <Switch>
          <Route path='/admin' exact component={AdminHome} />
          <Route path='/admin/addEmployee' exact component={AddEmployee} />
        </Switch>
      </Router>
    </div>
  );
};
