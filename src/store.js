import {createStore, applyMiddleware} from 'redux';
import {reducer} from './reducers/reducer';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
)

export default createStore(reducer, enhancer);