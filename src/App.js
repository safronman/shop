import React from 'react';
import logo from './logo.svg';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import {NavLink, Route} from "react-router-dom";
import CatalogPage from "./ui/CatalogPage/CatalogPage";

const App = (props) => {
    // debugger
    return (
        <div className={styles.App}>
            <div>
                <div>
                    <NavLink to='/homePage'
                             className={styles.link}
                             activeClassName={styles.activeLink}>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/catalogPage'
                             className={styles.link}
                             activeClassName={styles.activeLink}>CatalogPage</NavLink>
                </div>
            </div>

            <Route path='/homePage' render={ ()=> <HomePage state={props.state.homePage}/>}/>
            <Route path='/catalogPage' render={ ()=> <CatalogPage state={props.state.catalogPage}/>}/>
            <Route path='/ProductPage' component={ProductPage}/>
        </div>
    );
};

export default App;
