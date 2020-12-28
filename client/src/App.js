import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import "./tailwind.output.css";

function App() {
  let adminRoutes = (
    <>
      <Router>
        <Route path='/admin'>
          <AdminLogin />
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
