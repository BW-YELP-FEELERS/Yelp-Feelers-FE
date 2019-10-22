import React from 'react'
import favoriteSave from '../actions/favoritesAction'
import favoriteRemove from '../actions/favoritesAction'

const Favorites = (props) => {
    console.log(props)
   
  
    return (
      <div>
        <Mode/>
        {props.error && <p>{props.error}</p>}
        {props..map(fact => (
          <YDetail key={fact._id} fact={fact} />
        ))}
      </div>
    );
  };

const mapStateToProps = state => {
    return {
      state: state.myFavorites,
      isAdding: state.isAdding,
      isRemoving: state.isRemoving,
      error: state.error
    };
  };
  
  export default connect(
    mapStateToProps,
    { favoriteSave, favoriteRemove }
  )(Favorites);
  