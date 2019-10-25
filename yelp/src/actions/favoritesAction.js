import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
export const FAVORITE_SAVE = 'FAVORITE_SAVE'
export const FAVORITE_REMOVE = 'FAVORITE_REMOVE'
export const FAVORITE_SAVERR = 'FAVORITE_SAVERR'

//waiting for api to store favorites
export const favoriteSave = (props) => dispatch => {
    // make sure to call dispatch
    console.log(`favorite`,props)
    // dispatch({
    //     type: 'FAVORITE_SAVE'
    // })
    axiosWithAuth()
    .post(`https://yelp-feelers-be.herokuapp.com/auth/users/${props.loggedInId}/favs/${props.ad.id}`)
    .then(res => dispatch({ type: FAVORITE_SAVE, payload: res}))
    // .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FAVORITE_SAVERR, payload: err.response }));
}


export const favoriteRemove = (props) => dispatch => {
    axiosWithAuth()
    .delete(`https://yelp-feelers-be.herokuapp.com/auth/users/${props.loggedInId}/favs/${props.ad.id}/remove`)
    // .then(res => dispatch({ type: FAVORITE_REMOVE, payload: res.data }))
    .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FAVORITE_SAVERR, payload: err.response }));
}