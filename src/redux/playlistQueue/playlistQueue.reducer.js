import {pushingtoState, removeFromState, orderDownState, orderUpState} from './playlistQueue.utils';


const INITIAL_STATE = {
    queueList: []
}


const queueListState = (state = INITIAL_STATE, action) => {

    switch(action.type) {

        case 'ADD_TO_PLAYLIST': 

            return {
                ...state,
                queueList: pushingtoState(state, action.payload)
                
            }

        case 'REMOVE_FROM_PLAYLIST':

            return {
                ...state,
                queueList: removeFromState(state, action.payload)
            }

        case 'ORDER_UP_IN_PLAYLIST':
            return {
                ...state,
                queueList: orderUpState(state, action.payload)
            }

        case 'ORDER_DOWN_IN_PLAYLIST':
            return {
                ...state,
                queueList: orderDownState(state, action.payload)
            }
        
        default: return state 
    }
}

export default queueListState;