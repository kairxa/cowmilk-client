/**
 * Created by kairxa on 5/11/16.
 */

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, browserHistory, hashHistory} from 'react-router';
import {compose, createStore, combineReducers, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';
import ThunkMiddleware from 'redux-thunk';
import ReduxLogger from 'redux-logger';

import reducers from './reducers';

import ROUTES from './routes';

const LoggerMiddleware = ReduxLogger();

const combinedReducers = combineReducers({
    ...reducers,
    routing: routerReducer
});

const store = compose(
    applyMiddleware(
        ThunkMiddleware,
        LoggerMiddleware
    ),
    window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore)(combinedReducers);

const history = syncHistoryWithStore(hashHistory, store);

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {ROUTES}
        </Router>
    </Provider>,
    document.querySelector('#cowmilk')
);