import React, { useState, useEffect } from 'react'
import { axiosWithAuth } from '../utils/axiosWithAuth';

import {favoriteGet} from '../actions/restaurants'
import {favoriteRemove} from '../actions/favoritesAction'
import { connect } from 'react-redux';
import ButtonSave from './ButtonSave'
import FavoriteDisplay from './FavoritesDisplay'




const Favorites = (props) => {
    const[favs, setFavs]=useState([])

    console.log(`Favorites props`,props)
    console.log(`Favorites favs`,favs)
    
    useEffect(()=>{
    axiosWithAuth()
    .get(`https://yelp-feelers-be.herokuapp.com/auth/users/${props.loggedInId}/favs`)
    // .then(res => dispatch({ type: FAVORITE_REMOVE, payload: res.data }))
    .then(res => setFavs(res.data.response)) 
    // .then(res => console.log(`favoriteGet`,res))
    .catch(err => console.log(err));
    },[]);
   
    return (
        <div className="save-wrapper">
            {favs.map((fact => (
                <FavoriteDisplay
                key={fact.id} fact={fact} />
            )))}
        <button className="save-button" 
        onClick={favoriteRemove(props)}>
          Remove
        </button>
        <ButtonSave />
        </div>
    );
};
  
  
const mapStateToProps = state => {
    return {
     ad: state.favorites.myfavorites,
      loggedInId: state.loginId.idUser
    };
   
  };
  
  export default connect(
    mapStateToProps,
    { favoriteGet, favoriteRemove }
  )(Favorites);
