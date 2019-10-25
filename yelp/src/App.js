import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './components/Login';
// import Main from './components/Main';
import PrivateRoute from './components/PrivateRoute';
import Register from './components/Register';
import Review from './components/Review';
// import Favorites from './components/Favorites';
import SavedContainer from './components/SavedContainer';
import SimpleBottomNavigation from './components/AppBar';
import Favorites from './components/Favorites'
import './stylesheets/scss/index.css';



function App() {
  

  return (
    <Router>
      <div className="App">        
        <ul className="sign-forms">
        <li>
            <a href="https://practical-lamport-cc4fcf.netlify.com/">Landing</a>
          </li>
          <li>
            <Link to="/signin">Sign In</Link>
          </li>
          <li>
            <Link to="/register">Sign Up</Link>
          </li>
        </ul>
        <div className="title-grid">
          <ul>          
            <li>
              <Link to="/review">Review</Link>
            </li>
          </ul>
          <ul>          
            <li>
              <Link to="/favorites">Favorites</Link>
            </li>
          </ul>
          <span>
        <h1>Welcome to Yelp Feeder</h1>
          </span>
        </div>

        {/* switch, can use without exact */}
        <Switch>
          {/* <PrivateRoute path="/friends" component={Friends} />
          <PrivateRoute path="" component={AddFriend} /> */}
          {/* <Route exact path="/" component={Main} /> */}
          <Route path="/signin" component={Login} />
          <Route path="/register" component={Register} />
          <PrivateRoute path="/review" component={Review} />
          <PrivateRoute path="/favorites" component={Favorites} />
          {/* <PrivateRoute path="/favorites" component={Favorites} /> */}
          <Route
              path="/reviews/:id"
              render={props => {
          return <SavedContainer {...props} />;
        }} />
         </Switch>
        <SimpleBottomNavigation />
      </div>
    </Router>
  );
}

export default App;
