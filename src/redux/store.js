import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import rootReducer from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension';

//applyMiddleware function to use logger middleware to log state related to redux store
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store