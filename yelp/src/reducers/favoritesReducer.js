import { FAVORITE_SAVE, FAVORITE_REMOVE} from '../actions/favoritesAction'

const initialState = {
    favorites : []
}

export default function favorite(state = initialState, action) {
    switch(action.type){
        case "FAVORITE_SAVE":
            return[
            ...state.favorites, action.payload
            ]  
            
        case "FAVORITE_REMOVE":
                return[
                ...state, 
                state.favorites.filter(e => e.action.payload)
                ]  
        }
}
