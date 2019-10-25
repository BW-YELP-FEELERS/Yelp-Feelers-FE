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