import React from 'react'
import { connect } from 'react-redux';
import Mode from './Mode'
import {favoriteSave} from '../actions/favoritesAction'
import {favoriteRemove} from '../actions/favoritesAction'

//to take props from Favorites
//original reviews
//modified reviews
const MyProfile = props => {
    console.log(`MyProfile`,props)
    return(
        <>
        <Mode/>
        
        </>
    )

}

const mapStateToProps = state => {
    return {
    ogReviews: state.restaurants.diner
    
    };
    
  };
  
  export default connect(
    mapStateToProps,
    { favoriteRemove, favoriteSave }
  )(MyProfile);