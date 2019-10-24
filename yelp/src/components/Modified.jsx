import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import { fetchMod } from '../actions/modifiedAction';
import YDetail from './YDetail'



const Review = props => {
    
    console.log(props)
  useEffect(() => {
    props.fetchMod(props);
  }, []);

  if (props.isFetching) {
    // usually a spinner (react-loader-spinner)
    return <h2>Loading Feelers Reviews...</h2>;
  }
console.log(`Pl`, props)
  return (
    <div>
      {props.error && <p>{props.error}</p>}
      {props.adjusted.map(mod => (
        <YDetail key={mod.id} mod={mod} />
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    adjusted: state.modified.adjusted,
    isFetching: state.modified.isFetching,
    error: state.modified.error
  };
};

export default connect(
  mapStateToProps,
  { fetchMod }
)(Review);