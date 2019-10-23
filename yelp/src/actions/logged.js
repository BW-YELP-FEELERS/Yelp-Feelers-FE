import React from 'react'


export const AD_SUCCESS = "AD_SUCCESS"
export const AD_FAILURE = "AD_FAILURE"


export const logIn = (creds) => dispatch {
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