import { createStore, compose, applyMiddleware } from 'redux';
import reducers from '../reducers';
import { createLogger } from 'redux-logger';
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const logger = createLogger();

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk, logger)),
);

export default store;