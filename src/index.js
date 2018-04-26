import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
import { Provider } from 'react-redux';
import  AppRouter from './router';
import './css/basic.css';
import configureStore from './store/configureStore';
const store = configureStore( window.__REDUX_STATE__ || {} );
//console.log('store_c:',store)
const AppBundle = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
window.onload = () => {
    Loadable.preloadReady().then(() => {
        ReactDOM.hydrate(
            AppBundle,
            document.getElementById('root')
        );
    });
};
