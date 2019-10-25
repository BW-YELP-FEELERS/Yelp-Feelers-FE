import React, {useEffect, useState} from "react";
import axios from 'axios';
import ComplexGrid from './ComplexGrid';
import { connect } from 'react-redux';
import { favoriteSave } from '../actions/favoritesAction';
import { favoriteRemove } from '../actions/favoritesAction';
import { withRouter } from "react-router";

// import Navbar from './Mode';

  const ButtonSave = (props) => {
const favSave = ((e)=>{
    e.preventDefault()
    props.favoriteSave(props)
    alert('Review Saved')
    props.history.push('/')
})

    const favRemove = ((e)=>{
        e.preventDefault()
        props.favoriteRemove(props)
        props.history.push('/')
    })
 
console.log(props)

return (
  <>
  {props.message && <h4>{props.message}</h4>}
  <form>
    <button className="save-button" 
    onClick={favSave}>
      Save to Favorites
    </button>
    <button className="save-button" 
        onClick={favRemove}>
          Remove
        </button>
    </form>
  </>
);
}

const mapStateToProps = state => {
  console.log(`fruit`,state.favorites.message)
return {
  ad: state.adReducer.ad,
  message: state.favorites.message,
//   // isFetching: state.adReducer.isFetching,
//   // error: state.adReducer.error,
  loggedInId: state.loginId.idUser
};
};

export default connect(
mapStateToProps,
{ favoriteSave, favoriteRemove}
)(withRouter(ButtonSave));


