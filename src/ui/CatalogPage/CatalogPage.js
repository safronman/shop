import React from 'react';
import styles from './Catalog.module.css';
import {NavLink} from "react-router-dom";

const CatalogPage = ({catalogPage: {products, currentProduct}, addCurrentTitle, addCurrentImg, addCurrentDesc, addProduct}) => {
    // debugger
    let addCurrentTitleInProduct = (e) => {
        addCurrentTitle(e.currentTarget.value);
    };

    let addCurrentImgInProduct = (e) => {
        addCurrentImg(e.currentTarget.value);
    };

    let addCurrentDescInProduct = (e) => {
        addCurrentDesc(e.currentTarget.value);
    };

    let addNewProduct = () => {
        addProduct(currentProduct.img, currentProduct.title, currentProduct.shortDescription);
    };

    return (
        <div className={""}>
            <h1>Каталог</h1>
            <div className={styles.products}>
                {
                    products.map(p => <div key={p.id} className={styles.product} >

                        <div>
                            <NavLink to='/product'>
                                <img src={p.img} alt='alt'/>
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
            <div className={styles.addProduct}>
                <h2>Add new phone</h2>
                <input className={styles.input}
                       type="text"
                       placeholder="Enter title"
                       onChange={addCurrentTitleInProduct}
                       value={currentProduct.title}/>
                <input className={styles.input}
                       type="text"
                       placeholder="Enter img url"
                       onChange={addCurrentImgInProduct}
                       value={currentProduct.img}/>
                <textarea className={styles.textarea}
                          placeholder="Enter short description"
                          onChange={addCurrentDescInProduct}
                          value={currentProduct.shortDescription}/>
                <button className={styles.btn} onClick={addNewProduct}>Add phone</button>
            </div>
        </div>
    )
};

export default CatalogPage;