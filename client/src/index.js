// axios: API requests
// moment: working with time & date
// react-file-base64: converting image files
// redux-thunk: async actions using redux (dispatching actions towards the backend API)


// connecting our React app to an index.html

import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'; // Provider allows access to state regardless of what component we're in

import reducers from './reducers';

import App from './App';

/*
import { createStore, applyMiddleware, compose } from 'redux'; 
import thunk from 'redux-thunk';

const store = createStore(reducers, compose(applyMiddleware(thunk)));
*/

import { configureStore } from '@reduxjs/toolkit'; // https://redux-toolkit.js.org/api/configureStore#basic-example

const store = configureStore({ reducer: reducers });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
document.getElementById('root'));