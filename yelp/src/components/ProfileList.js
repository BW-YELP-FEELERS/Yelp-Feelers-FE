import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRest } from '../actions';
import YDetail from './YDetail'

import Mode from './Mode'

const ProfileList = props => {
    
    console.log(props)
  useEffect(() => {
    props.fetchRest();
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Resturants Facts...</h2>;
  }

  return (
    <div>
      <Mode/>
      {props.error && <p>{props.error}</p>}
      {props.catFacts.map(fact => (
        <YDetail key={fact._id} fact={fact} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    catFacts: state.restaurants.catFacts,
    isFetching: state.restaurants.isFetching,
    error: state.restaurants.error
  };
};

export default connect(
  mapStateToProps,
  { fetchRest }
)(ProfileList);



