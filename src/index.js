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
import {Provider} from "react-redux";

let combineReducer = combineReducers({
    productPage: productPageReducer,
    homePage: homePageReducer,
    catalogPage: catalogPageReducer
});

let store = createStore(combineReducer);

let renderPage = () => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>,
        document.getElementById('root'));
};

renderPage(store.getState());

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
