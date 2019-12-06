import { applyMiddleware, createStore, combineReducers, compose } from 'redux';

import behavior from './reducers/behaviorReducer';
import messages from './reducers/messagesReducer';
import logger from 'redux-logger';
const reducer = combineReducers({ behavior, messages });
const DEBUG = window._env_.NODE_ENV !== 'prod';

const middleware = [
  DEBUG && logger,
].filter(Boolean);

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
  // other store enhancers if any
);

export default createStore(
  reducer,
  enhancer
);
