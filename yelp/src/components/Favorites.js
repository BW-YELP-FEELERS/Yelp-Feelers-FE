import React from 'react'

import {favoriteRemove} from '../actions/favoritesAction'
//import ComplexGrid from './ComplexGrid';
import SimpleGrid from './SimpleGrid'
import { connect } from 'react-redux';
import MyProfile from './MyProfile'


const Favorites = (props) => {
    console.log(`Favorites props`,props.myFavorites)
   
  
    return (
        <div className="save-wrapper">
        <SimpleGrid fact={props.ad} />
        <button className="save-button" 
        onClick={favoriteRemove(props.ad)}>
          Remove
        </button>
        </div>
    );
};
  
  
const mapStateToProps = state => {
    return {
      myfavorites: state.favorites.myFavorites,
    };
  };
  
  export default connect(
    mapStateToProps,
    { favoriteRemove }
  )(Favorites);
