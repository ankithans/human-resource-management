import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AdminLogin from "./components/Admin/AdminLogin";
import "./tailwind.output.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/admin'>
          <AdminLogin />
        </Route>
        <Route path='/'>
          <div>Hello</div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
