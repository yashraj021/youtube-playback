import { combineReducers } from 'redux';
import { persistReducer} from 'redux-persist'


import storage from 'redux-persist/lib/storage';

import queueListState from './playlistQueue/playlistQueue.reducer';

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['playlistQueue']
}

const rootReducer =  combineReducers({
    playlistQueue: queueListState
});

export default persistReducer(persistConfig, rootReducer)