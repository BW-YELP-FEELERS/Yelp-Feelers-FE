// //to consume all reducer files
// import RestaurantsReducer from './restaurants'
// import {combineReducers} from 'redux'

// const rootReducer = combineReducers ({
//     restaurantsReducer: RestaurantsReducer,
// })

// export default rootReducer
//to consume all reducer files
import { combineReducers } from 'redux'
import restaurants from './restaurants'
import adReducer from './adReducer'
import favorites from './favoritesReducer'
import modified from './modifiedReducer'
import loginId from './loginReducer'

export default combineReducers ({
  restaurants,
  adReducer,
  favorites,
  modified,
  loginId
})
export {logged} from './loggedIn';