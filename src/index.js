import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import store, {addComment} from "./Redux/store";

let state = store.state;

let addCommentOnPage = (comment)=> {
    addComment(comment);
    renderPage();
};

let renderPage = () => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addCommentOnPage={addCommentOnPage}/>
        </BrowserRouter>,
        document.getElementById('root'));
};

renderPage();


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
