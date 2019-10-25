import { FAVORITE_SAVE, FAVORITE_REMOVE, FAVORITE_SAVERR} from '../actions/favoritesAction'
import {FAVORITE_GET} from '../actions/favortieGet'

const initialState = {
    myfavorites : [],
    err: false,
    message: ""
}


const Favorites = (state = initialState, action) => {
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
            myfavorites: action.payload,
            message: 'Review Saved!'
        }

        case FAVORITE_REMOVE:
                return{
                ...state, 
                myfavorites: state.favorites.filter(e => !e.action.payload)
                 }
        case FAVORITE_SAVERR:
            return{
                ...state,
                err:true,
                message:"Try again..."
            }
            case FAVORITE_GET:
                    return{
                        ...state,
                        myfavorites: action.payload
                    }
        //must include default: return state
        default:
            return state
    }
    
}
export default Favorites

