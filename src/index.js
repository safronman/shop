import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import {combineReducers, createStore} from "redux";
import productPageReducer from "./Redux/productPageReducer";
import homePageReducer from "./Redux/homePageReducer";
import catalogPageReducer from "./Redux/catalogPageReducer";

let combineReducer = combineReducers({
    productPage: productPageReducer,
    homePage: homePageReducer,
    catalogPage: catalogPageReducer
});

let store = createStore(combineReducer);

let renderPage = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage(store.getState());

store.subscribe(() => {
    let state = store.getState();
    renderPage(state);
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
