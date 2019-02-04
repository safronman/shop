import React from 'react';
import styles from './App.module.css';
import ProductPage from "./ui/ProductPage/ProductPage";
import HomePage from "./ui/HomePage/HomePage";
import CatalogPage from "./ui/CatalogPage/CatalogPage";
import {NavLink, Route} from "react-router-dom";


const App = ({addCurrentImgOnPage, addCurrentDescOnPage, addCurrentTitleOnPage, addCurrentMessageOnPage,  addProductOnPage, addCommentOnPage, state: {homePage, catalogPage, productPage}}) => {
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
                                                              addCurrentTitleOnPage={addCurrentTitleOnPage}
                                                              addCurrentDescOnPage={addCurrentDescOnPage}
                                                              addCurrentImgOnPage={addCurrentImgOnPage}
                                                              addProductOnPage={ addProductOnPage}/>}/>
            <Route path='/product' render={() => <ProductPage productPage={productPage}
                                                              addCommentOnPage={addCommentOnPage}
                                                              addCurrentMessageOnPage={addCurrentMessageOnPage}/>}/>
        </div>
    );
};

export default App;
