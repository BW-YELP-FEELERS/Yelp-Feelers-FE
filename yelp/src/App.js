import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import Login from './components/Login';
import SignIn from './components/SignIn';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import ProfileList from './components/ProfileList';
import AdF from './components/AdF'
import Favorites from './components/Favorites'



function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          {/* <li>
            <Link to="/login">Login</Link>
          </li> */}
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
          <li>
            <Link to="/profileList">ProfileList</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
         
        </ul>
        {/* switch, can use without exact */}
        <Switch>
          {/* <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="" component={AddFriend} /> */}
          {/* <Route path="/login" component={Login} /> */}
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/profileList" component={ProfileList} />
          <PrivateRoute path="/favorites" component={Favorites} />
          <Route
              path="/reviews/:id"
              render={props => {
          return <AdF {...props} />;
          
        }} />
          
        </Switch>
      </div>
    </Router>
  );
}

export default App;
