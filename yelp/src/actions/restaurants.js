// import React from 'react'
// import axios from 'axios'


// // action types
// export const START_FETCHING = 'START_FETCHING';
// export const FETCH_SUCCESS = 'FETCH_SUCCESS';
// export const FETCH_FAILURE = 'FETCH_FAILURE';


// // action creator
// //fetchRest imports to Restaurants
// export const fetchRest = () => dispatch => {
//   // action objects
//   dispatch({ type: START_FETCHING });
//   // from thunk (see below) do some async action and dispatch an error or success action
//   axios.get('http://localhost:3333/smurfs')
//     .then(res => dispatch({ type: FETCH_SUCCESS, payload: res.data }))
//     .catch(err => dispatch({ type: FETCH_FAILURE, payload: err.response }));
// };

import React from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';


export const FAVORITE_GET = 'FAVORITE_GET'


export const favoriteGet = (props) => dispatch => {
    axiosWithAuth()
    .get(`https://yelp-feelers-be.herokuapp.com/auth/users/${props.loggedInId}/favs`)
    // .then(res => dispatch({ type: FAVORITE_REMOVE, payload: res.data }))
    .then(res => dispatch({ type: FAVORITE_GET, payload: res})) 
    // .then(res => console.log(`favoriteGet`,res))
    .catch(err => dispatch({ type: FAVORITE_GET, payload: err.response }));
};