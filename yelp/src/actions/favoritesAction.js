import React from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
export const FAVORITE_SAVE = 'FAVORITE_SAVE'
export const FAVORITE_REMOVE = 'FAVORITE_REMOVE'

//waiting for api to store favorites
export const favoriteSave = (props) => dispatch => {
    // make sure to call dispatch
    console.log(props)
    // dispatch({
    //     type: 'FAVORITE_SAVE'
    // })
    axiosWithAuth()
    .post(`https://yelp-feelers-be.herokuapp.com/users/${props.id}/favs/${props.business_id}`)
    // .then(res => dispatch({ type: FAVORITE_SAVE, payload: res.data.review }))
    .then(res => console.log(res.data))
    .catch(err => dispatch({ type: FAVORITE_REMOVE, payload: err.response }));
}


export const favoriteRemove = (item) => dispatch => {
    dispatch({
        type: 'FAVORITE_REMOVE',
        payload: item
    })
}