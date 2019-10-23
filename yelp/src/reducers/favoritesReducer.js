import { FAVORITE_SAVE, FAVORITE_REMOVE} from '../actions/favoritesAction'

const initialState = {
    myfavorites : []
}


const favorites = (state = initialState, action) => {
    switch(action.type){
        // case FAVORITE_FETCH:
        //     return{
        //         ...state,
        //         myfavorites: action.payload
        //     }
        
        case FAVORITE_SAVE:
            console.log(action.payload)
            return{
            ...state,
            myfavorites: action.payload
        }

        case FAVORITE_REMOVE:
                return{
                ...state, 
                myfavorites: state.favorites.filter(e => e.action.payload)
                 }
        //must include default: return state
        default:
            return state
    }
    
}
export default favorites
