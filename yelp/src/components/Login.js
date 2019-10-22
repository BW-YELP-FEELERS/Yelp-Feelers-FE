import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';


const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const[credentials, setCred]= useState({username:'', password:''})


  const handleChange = e => {
    setCred({
        ...credentials,
        [e.target.name]: e.target.value
    });
    console.log(credentials)
  };


    //makes request to api/login, sends object of username / password (this.state.credentials)
  //gets token and saves in localstorage
  const login = e => {
    e.preventDefault();
    // axiosWithAuth ==> ?? an axios instance; .post() ==> ?? promise
    axiosWithAuth()
      .post('https://yelp-feelers-be.herokuapp.com/login', credentials)
      .then(res => {
          console.log(res)
        localStorage.setItem('token', res.data.payload);
        // redirect to the apps main page?
        //Route component - props.history
        props.history.push('/');
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <h1>Welcome to the YELP App!</h1>
      <div>
        <form onSubmit={login}>
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
          <button>Log in</button>
        </form>
      </div>

    </>
  );
};

export default Login;