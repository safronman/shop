import React from 'react';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import {NavLink, Route} from "react-router-dom";


const App = ({store, state: {homePage, catalogPage, productPage}}) => {
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
            <Route path='/catalog' render={() => <CatalogPage catalogPage={catalogPage}
                                                              addCurrentTitleOnCatalogPage={store.addCurrentTitleOnCatalogPage.bind(store)}
                                                              addCurrentImgOnCatalogPage={store.addCurrentImgOnCatalogPage.bind(store)}
                                                              addCurrentDescOnCatalogPage={store.addCurrentDescOnCatalogPage.bind(store)}
                                                              addProductOnCatalogPage={store.addProductOnCatalogPage.bind(store)}/>}/>

            <Route path='/product' render={() => <ProductPage productPage={productPage}
                                                              addCurrentMessageToProductPage={store.addCurrentMessageToProductPage.bind(store)}
                                                              addCommentToProductPage={store.addCommentToProductPage.bind(store)}/>}/>
        </div>
    );
};

export default App;
