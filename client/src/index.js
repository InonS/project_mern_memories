// axios: API requests
// moment: working with time & date
// react-file-base64: converting image files
// redux-thunk: async actions using redux (dispatching actions towards the backend API)


// connecting our React app to an index.html

import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';

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

const appJsx = <Provider store={store}>
    <App />
</Provider>;
/*
ReactDOM.render(
    appJsx, 
document.getElementById('root'));
*/
const container = document.getElementById('root');
const root = createRoot(container); // https://reactjs.org/blog/2022/03/08/react-18-upgrade-guide.html#updates-to-client-rendering-apis
root.render(appJsx);