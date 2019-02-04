import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store, {
    addCurrentDescInState,
    addCurrentImgInState,
    addCurrentMessageInState,
    addCurrentTitleInState,
    addMessageInState,
    addProductInState,
    addTitleInState
} from "./Redux/store";

let state = store.state;

let addCurrentMessageOnPage = (message) => {
    addCurrentMessageInState(message);
    renderPage();
};

let addCommentOnPage = (message) => {
    addMessageInState(message);
    renderPage();
};

// add product on catalog page
let addCurrentImgOnPage = (img) => {
    addCurrentImgInState(img);
    renderPage();
};

let addCurrentTitleOnPage = (title) => {
    addCurrentTitleInState(title);
    renderPage();
};

let addCurrentDescOnPage = (text) => {
    addCurrentDescInState(text);
    renderPage();
};


let addProductOnPage = (img, title, desc) => {
    addProductInState(img, title, desc);
    renderPage();
};


let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addCommentOnPage={addCommentOnPage}
                 addCurrentMessageOnPage={addCurrentMessageOnPage}
                 addCurrentTitleOnPage={addCurrentTitleOnPage}
                 addCurrentDescOnPage={addCurrentDescOnPage}
                 addCurrentImgOnPage={addCurrentImgOnPage}
                 addProductOnPage={addProductOnPage}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
