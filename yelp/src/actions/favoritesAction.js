import React from 'react'
import axios from 'axios'

export const FAVORITE_SAVE = 'FAVORITE_SAVE'
export const FAVORITE_REMOVE = 'FAVORITE_REMOVE'

//waiting for api to store favorites
export const favoriteSave = (item) => dispatch => {
    // make sure to call dispatch
    console.log(item)
    dispatch({
        type: 'FAVORITE_SAVE',
        payload: item
    })
    axios
    .post(`https://yelp-feelers-be.herokuapp.com/reviews/$`)
    .then(res => dispatch({ type: FAVORITE_SAVE, payload: res.data.review }))
    // .then(res => console.log(res.data.all))
    .catch(err => dispatch({ type: FAVORITE_REMOVE, payload: err.response }));
}


export const favoriteRemove = (item) => dispatch => {
    dispatch({
        type: 'FAVORITE_REMOVE',
        payload: item
    })
}