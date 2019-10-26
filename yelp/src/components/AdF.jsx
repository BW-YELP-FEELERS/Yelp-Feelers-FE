import React, {useEffect, useState} from "react";
import axios from 'axios';
import ComplexGrid from './ComplexGrid';
import { connect } from 'react-redux';
import { favoriteSave } from '../actions/favoritesAction';
import { fetchAd } from '../actions/adActions';
import ButtonSave from "./ButtonSave"
import SimpleGrid from "./SimpleGrid";


// import Navbar from './Mode';

  const AdF = (props) => {

    // const fetchAdding= ((e)=>{
    //   e.preventDefault()
    //   props.fetchAd(props)
    // })

    useEffect(() => {
      console.log(`Ad props`, props)
        props.fetchAd(props)
      }, [])


  // const deleteItem = e => {
  //   e.preventDefault();
  //   axios
  //     .delete(`http://localhost:5000/api/movies/${ad.id}`)
  //     .then(res => {
  //       console.log(res.data)
  //     })
  //     .catch(err => console.log(err.response));
  // };
console.log(props)

return (
  <>
  {/* <Navbar /> */}
  <div className="save-wrapper">
    <SimpleGrid fact={props.ad} />
    
    {/* <button className="save-button" 
    onClick={favoriteSave(props.ad)}>
      Save to Favorites
    </button> */}
    {/* <button
    onClick={() => this.props.history.push(`/update-movie/${this.state.ad.id}`)}
  >
    Edit Movie
  </button>
  <button onClick={this.deleteItem} className="md-button">
    Delete Item
  </button> */}
  </div>
  </>
);
}

const mapStateToProps = state => {
return {
  ad: state.adReducer.ad,
  // isFetching: state.adReducer.isFetching,
  // error: state.adReducer.error,
  //loggedInId: state.loginId.idUser
};
};

export default connect(
mapStateToProps,
{ fetchAd, favoriteSave}
)(AdF);



