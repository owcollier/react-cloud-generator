import {createStore, applyMiddleware} from 'redux';

import {reducer} from './reducer/reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)
export default createStore(reducer, enhancer);