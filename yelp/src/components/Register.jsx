import React, { useState } from "react";
import axios from "axios";



//need to destructure history, so can redirect user to other pages
export default function Register({ history }) {
  const [login, setLogin] = useState(
    {
      username: '',
      password: ''
    }
  )

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    axios.post('https://yelp-feelers-be.herokuapp.com/register', login)
      .then(res => {
        console.log("registration result:", res);
        localStorage.setItem('token', res.data.token);
        history.push("/signin");
      })
      .catch(err => console.log(err.response));
  };

  const handleLogin = event => {
    history.push("/signin")
  }



  return (
    <div>
      <div className='backgroundR'></div>
      <div className='content'> 
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={handleChange}
          value={login.username}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
          value={login.password}
        />
        <div>
        <button  type="submit">Sign Up!</button>
        </div>
      </form>
      <button  onClick={handleLogin}>Already have an account? Log in.</button>
    </div>
    </div>
  )
}