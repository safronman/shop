import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store from "./Redux/store";

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={store.getState()}
                 store={store}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();

store.subscribe(() => {
    renderPage();
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
