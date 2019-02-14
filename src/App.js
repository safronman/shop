import React from 'react';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import {NavLink, Route} from "react-router-dom";


const App = ({state: {homePage, catalogPage, productPage}, store}) => {
    // debugger
    return (
        <div className={styles.App}>
            <div>
                <div>
                    <NavLink exact to='/'
                             className={styles.link}
                             activeClassName={styles.activeLink}>Home</NavLink>
                </div>
                <div>
                    <NavLink to='/catalog'
                             className={styles.link}
                             activeClassName={styles.activeLink}>CatalogPage</NavLink>
                </div>
            </div>

            <Route exact path='/' render={() => <HomePage homePage={homePage}/>}/>
            <Route path='/catalog' render={() => <CatalogPage catalogPage={catalogPage} store={store}/>}/>
            <Route path='/product' render={() => <ProductPage productPage={productPage} store={store}/>}/>
        </div>
    );
};

export default App;
