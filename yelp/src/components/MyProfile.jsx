// import React from 'react'
// import { connect } from 'react-redux';
// import Mode from './Mode'
// import {favoriteSave} from '../actions/favoritesAction'
// import {favoriteRemove} from '../actions/favoritesAction'

// //to take props from Favorites
// //original reviews
// //modified reviews
// const MyProfile = props => {
//     console.log(`MyProfile`,props)
//     return(
//         <>
//         <Mode/>
//         <div>
//         <p>{props.ogReviews.original_text_review}</p>
//         </div>
//         <div>
//         <p>{props.mod._text_review}</p>
//         </div>
//         </>
//     )

// }

// const mapStateToProps = state => {
//     return {
//     ogReviews: state.restaurants.diner
    
//     };
    
//   };
  
//   export default connect(
//     mapStateToProps,
//     { favoriteRemove, favoriteSave }
//   )(MyProfile);