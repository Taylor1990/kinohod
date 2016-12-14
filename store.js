import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import appReducer from './reducer';

export default class Store {
    constructor(history){
        const reducer = combineReducers({
            app: appReducer,
            routing: routerReducer
        });
        const routingMiddleware = routerMiddleware(history);

        this.store = compose(
            applyMiddleware(routingMiddleware, thunk),
            window.devToolsExtension ? window.devToolsExtension() : f => f
        )(createStore)(reducer);
    }

    getStore(){
        return this.store;
    }
}
