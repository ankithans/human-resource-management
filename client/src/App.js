import { useContext } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AuthContext } from "./context/Auth/AuthProvider";
import AdminLogin from "./components/Admin/AdminLogin";
import "./tailwind.output.css";
import { AdminDashboard } from "./components/Admin/AdminDashboard";
import { AddEmployee } from "./components/Admin/AddEmployee";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  let adminRoutes = (
    <>
      <Router>
        <Switch>
          <Route exact path='/admin/login'>
            {isLoggedIn ? <Redirect to='/admin' /> : <AdminLogin />}
          </Route>

          <Route path='/admin'>
            {isLoggedIn ? <AdminDashboard /> : <Redirect to='/admin/login' />}
          </Route>
        </Switch>
      </Router>
    </>
  );

  return <>{adminRoutes}</>;
}

export default App;
