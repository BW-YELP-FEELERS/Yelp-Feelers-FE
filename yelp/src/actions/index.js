import React from 'react'
import axios from 'axios'


// action types
export const START_FETCHING = 'START_FETCHING';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const NEW_REVIEW_FETCH = 'NEW_REVIEW_FETCH';
export const NEW_REVIEW_SUCCESS = 'ADD_REVIEW_SUCCESS';
export const NEW_REVIEW_FAILURE = 'ADD_REVIEW_FAILURE';

// action creator
//fetchRest imports to Restaurants
export const fetchRest = () => dispatch => {
  // action objects
  dispatch({ type: START_FETCHING });
  // from thunk (see below) do some async action and dispatch an error or success action
  axios.get('https://yelp-feelers-be.herokuapp.com/reviews')
    .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
    // .then(res => console.log(`Index Action res.data`, res.data))
    .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
};


