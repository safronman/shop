import React from 'react';
import styles from './Home.module.css';
import {NavLink} from "react-router-dom";

const HomePage = ({homePage: {banner, popularProducts}}) => {
    // debugger

    return (
        <div className={""}>
            <div>
                <img className={styles.banner}
                     src={banner.img}
                     alt=''/>
            </div>
            <div>
                <h2>Популярные товары</h2>
                <div className={styles.popularBlock}>
                    {
                        popularProducts.map(p => <div key={p.id}>
                            <div>
                                <NavLink to='/product'>
                                    <img src={p.img} alt='alt'/>
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