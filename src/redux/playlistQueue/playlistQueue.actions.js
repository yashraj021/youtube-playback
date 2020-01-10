
export const addToPlaylist = (value) => ({
    type: 'ADD_TO_PLAYLIST',
    payload: value
})



export const removeFromPlaylist = (value) => ({
    type: 'REMOVE_FROM_PLAYLIST',
    payload: value
})

export const orderUp = (value) => ({
    type: 'ORDER_UP_IN_PLAYLIST',
    payload: value
})

export const orderDown = (value) => ({
    type: 'ORDER_DOWN_IN_PLAYLIST',
    payload: value
})