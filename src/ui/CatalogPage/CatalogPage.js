import React from 'react';
import styles from './Catalog.module.css';
import {NavLink} from "react-router-dom";

const CatalogPage = ({catalogPage: {products}}) => {
    // debugger

    return (
        <div>
            <div className={""}>
                <h1>Каталог</h1>
                <div className={styles.products}>
                    {
                        products.map(p => <div className={styles.product}>

                            <div>
                                <NavLink to='/product'>
                                    <img src={p.img}/>
                                </NavLink>
                            </div>
                            <div>
                                <div>
                                    <b>{p.title}</b>
                                </div>
                                <div>
                                    {p.shortDescription}
                                </div>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>)
};

export default CatalogPage;