import React from 'react';
import styles from './Home.module.css';
import {NavLink} from "react-router-dom";

const HomePage = ({homePage: {banner, popularProducts}}) => {
    // debugger

    return (
        <div className={""}>
            <div>
                <img className={styles.banner}
                     src={banner.img}/>
            </div>
            <div>
                <h2>Популярные товары</h2>
                <div className={styles.popularBlock}>
                    {
                        popularProducts.map(p => <div>
                            <div>
                                <NavLink to='/product'>
                                    <img src={p.img}/>
                                </NavLink>
                            </div>
                            <div>
                                {p.title}
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default HomePage;