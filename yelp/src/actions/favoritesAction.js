import React from 'react'

export const FAVORITE_SAVE = 'FAVORITE_SAVE'
export const FAVORITE_REMOVE = 'FAVORITE_REMOVE'

export const favoriteSave = () => {
    return{
        type: 'FAVORITE_SAVE'
    }
}

export const favoriteRemove = () => {
    return{
        type: 'FAVORITE_REMOVE'
    }
}