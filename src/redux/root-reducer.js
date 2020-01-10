import { combineReducers } from 'redux';

import queueListState from './playlistQueue/playlistQueue.reducer';

export default combineReducers({
    playlistQueue: queueListState
});