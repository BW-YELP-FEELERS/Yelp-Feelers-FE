import React from 'react'
import {favoriteSave} from '../actions/favoritesAction'
import {favoriteRemove} from '../actions/favoritesAction'
import ComplexGrid from './ComplexGrid';
import { connect } from 'react-redux';
import MyProfile from './MyProfile'


const Favorites = (props) => {
    console.log(`Favorites props`,props.myFavorites)
   
  
    return (
      <div>
        {props.error && <p>{props.error}</p>}
        {props.myfavorites.map(fact => (
          <MyProfile key={fact.id} fact={fact} />
        ))}
      </div>
    );
  };
  
const mapStateToProps = state => {
    return {
      myfavorites: state.favorites.myFavorites,
    //   isAdding: state.isAdding,
    //   isRemoving: state.isRemoving,
    //   error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { favoriteSave, favoriteRemove }
  )(Favorites);
  