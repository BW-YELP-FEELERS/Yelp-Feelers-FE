import React from 'react';
import '../css/profilecard'
import favoriteSave from '../actions/favoritesAction'




const ProfileCard = props => {
    console.log(props)

  return (
  <div className='list-card'>
  <p>{props.fact.text}</p>;
    <div className="save-button" onClick={props.favoriteSave}>
        Save
      </div>
  </div>
  )
};

export default ProfileCard;

const mapStateToProps = state => {
  return {
    catFacts: state.catFacts,
    isFetching: state.isFetching,
    error: state.error
  };
};

export default connect(
  null,
  { favoriteSave }
)(ProfileList);
