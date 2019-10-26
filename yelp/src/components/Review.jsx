import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRest } from '../actions';
import YDetail from './YDetail'


const Review = props => {
    
  useEffect(() => {
    props.fetchRest(props);
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Reviews...</h2>;
  }

  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.diner.map(fact => (
         <React.Fragment>
        <YDetail key={fact.business_id} fact={fact} />
        {/* <HoverRating key={fact.business_id} fact={fact} />
        <AdjustedRating key={fact.business_id} fact={fact} /> */}
        </React.Fragment>
      ))
      }
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
)(Review);



