import { createStore, applyMiddleware} from 'redux';
import { persistStore } from 'redux-persist';
import {
    createStateSyncMiddleware,
    initStateWithPrevTab,
  } from "redux-state-sync";
import logger from 'redux-logger';
import rootReducer from './root-reducer';

const config = {
    // TOGGLE_TODO will not be triggered in other tabs
    blacklist: ["TOGGLE_TODO"],
  };

const middlewares = [logger, createStateSyncMiddleware(config)];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));
initStateWithPrevTab(store);

export const persistor = persistStore(store);


