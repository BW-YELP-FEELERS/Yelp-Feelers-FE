import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchRest } from '../actions';
import YDetail from './YDetail'



const ProfileList = props => {
    
    console.log(props)
  useEffect(() => {
    props.fetchRest(props);
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Resturants Facts...</h2>;
  }
console.log(`Pl`, props)
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.diner.map(fact => (
        <YDetail key={fact.business_id} fact={fact} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    diner: state.restaurants.diner,
    isFetching: state.restaurants.isFetching,
    error: state.restaurants.error
  };
};

export default connect(
  mapStateToProps,
  { fetchRest }
)(ProfileList);


