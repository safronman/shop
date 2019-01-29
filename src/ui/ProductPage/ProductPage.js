import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';

const ProductPage = ({productPage: {product}}) => {
    debugger

    return <div>
        <div className={styles.productCard}>
            <div>
                <img className={styles.productCard}
                     src={product.img}/>
            </div>
            <div>
                <h1>{product.title}</h1>
                <div>{product.desc}</div>
            </div>
            <div>
                <div>Обсуждений <span>10</span></div>
                <div>Отзывов <span>13</span></div>
            </div>
        </div>
        <div>
            <div>
                <h3>Отзывы:</h3>
            </div>
            <div>
                <Comment />
                <Comment />
                <Comment />
                <Comment />
                <Comment />
            </div>
        </div>
    </div>
}

export default ProductPage;