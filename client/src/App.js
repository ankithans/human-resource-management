import { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/Auth/AuthProvider";
import AdminLogin from "./components/Admin/AdminLogin";
import "./tailwind.output.css";
import { AdminDashboard } from "./components/Admin/AdminDashboard";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  let adminRoutes = (
    <>
      <Router>
        <Route exact path='/admin'>
          {isLoggedIn ? <Redirect to='/' /> : <AdminLogin />}
        </Route>

        <Route path='/'>
          {isLoggedIn ? <AdminDashboard /> : <Redirect to='/admin' />}
        </Route>
      </Router>
    </>
  );

  return <>{adminRoutes}</>;
}

export default App;
