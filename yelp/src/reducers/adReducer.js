import { AD_FETCH, AD_SUCCESS, AD_FAILURE} from '../actions/adActions'

const initialState = {
    ad : [],
    isFetching: false,
    error: ''
}

const adReducer = (state = initialState, action) => {
    switch (action.type) {
        case AD_FETCH:
          return {
            ...state,
            isFetching: true,
            error: ''
          };
        case AD_SUCCESS:
          return {
            ...state,
            isFetching: false,
            error: '',
            ad: action.payload
          };
        case AD_FAILURE:
          return {
            ...state,
            error: action.payload,
            isFetching: false
          };
        default:
          return state;
      }
    };
 
export default adReducer;