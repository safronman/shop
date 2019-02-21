import React from 'react';
import styles from './App.module.css';
import {NavLink, Route} from "react-router-dom";
import ProductPageContainer from "./ui/ProductPage/ProductPageContainer";
import HomePageContainer from "./ui/HomePage/HomePageContainer";
import CatalogPageContainer from "./ui/CatalogPage/CatalogPageContainer";


const App = () => {

    // {state: {homePage, catalogPage, productPage}, store}
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

            <Route exact path='/' render={() => <HomePageContainer/>}/>
            <Route path='/catalog' render={() => <CatalogPageContainer/>}/>
            <Route path='/product' render={() => <ProductPageContainer/>}/>
        </div>
    );
};

export default App;
