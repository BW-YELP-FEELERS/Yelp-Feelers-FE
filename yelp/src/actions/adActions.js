import React from 'react'
import axios from 'axios'


// action types

export const AD_FETCH = 'AD_FETCH';
export const AD_SUCCESS = 'AD_SUCCESS';
export const AD_FAILURE = 'AD_FAILURE';

// action creator
//fetchRest imports to Restaurants
export const fetchAd = (props) => dispatch => {
  console.log(`adActions`,props)
  // action objects
  dispatch({ type: AD_FETCH });
  // from thunk (see below) do some async action and dispatch an error or success action
  axios.get(`https://yelp-feelers-be.herokuapp.com/reviews/${props.match.params.id}`)
    .then(res => dispatch({ type: AD_SUCCESS, payload: res.data.review}))
    .then(res => console.log(`adActions`, res.data.review))
    .catch(err => dispatch({ type: AD_FAILURE, payload: err.response }));
};
