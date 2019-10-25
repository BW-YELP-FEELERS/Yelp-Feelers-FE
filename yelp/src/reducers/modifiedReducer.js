//to consume all reducer files
// import { START_FETCHING, FETCH_SUCCESS, FETCH_FAILURE} from '../actions/modifiedAction'

// const initialState = {
//     adjusted : [],
//     isFetching: false,
//     error: ''
// }

// const modified = (state = initialState, action) => {
//     switch (action.type) {
//         case START_FETCHING:
//           return {
//             ...state,
//             isFetching: true,
//             error: ''
//           };
//         case FETCH_SUCCESS:
//           return {
//             ...state,
//             isFetching: false,
//             error: '',
//             adjusted: action.payload
//           };
//         case FETCH_FAILURE:
//           return {
//             ...state,
//             error: action.payload,
//             isFetching: false
//           };
//         default:
//           return state;
//       }
//     };
 
// export default modified;