

import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import { BrowserRouter as Router,Switch,Route } from "react-router-dom";
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Reset from './pages/Reset/Reset';
import Forgot from './pages/Forgot/Forgot';
import UpdatePass from './pages/UpdatePass/UpdatePass';
function App() {
  return (
    <div className="App">
        <Router>
        <Switch>
          <Route path="/" exact component={() => <SignIn/>}/>
          <Route path="/signin" component={() => <SignIn/>}/>
          <Route path="/signup" component={() => <SignUp/>}/>
          <Route path="/reset" component={() => <Reset/>}/>
          <Route path="/forgot" component={() => <Forgot/>}/>
          <Route path="/updatepass" component={() => <UpdatePass/>}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
