
import logger from 'redux-logger';
import { createStore , applyMiddleware } from 'redux';

import rootReducer from '../reducers/root-reducer';




const store = createStore(
    rootReducer,
    applyMiddleware(logger)
)

export default store;