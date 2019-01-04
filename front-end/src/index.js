import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import Reducers from './reducers';

const store = applyMiddleware(promise, thunk)(createStore)(Reducers)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
    , document.getElementById('root'));

serviceWorker.unregister();
