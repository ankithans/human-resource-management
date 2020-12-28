import { useContext } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import { AuthContext } from "./context/Auth/AuthProvider";
import AdminLogin from "./components/Admin/AdminLogin";
import "./tailwind.output.css";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  let adminRoutes = (
    <>
      <Router>
        <Route exact path='/admin'>
          {isLoggedIn ? <Redirect to='/' /> : <AdminLogin />}
        </Route>
        <Route path='/'>
          <div>Hello</div>
        </Route>
      </Router>
    </>
  );

  return <>{adminRoutes}</>;
}

export default App;
