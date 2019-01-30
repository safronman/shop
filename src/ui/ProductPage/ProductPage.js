import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';

const ProductPage = ({addCommentOnPage, productPage: {product, comments}}) => {
    // debugger

    // Создание реферальной ссылки
    let textAreaElement = React.createRef();

    let commentArray = comments.map((item, id) => {
        return <div key={id}>{item}</div>;
    });

    let onAddCommentButtonClick = () => {
        addCommentOnPage(textAreaElement.current.value);
        textAreaElement.current.value = '';
    };

    return <div>
        <div className={styles.productCard}>
            <div>
                <img className={styles.productCard}
                     src={product.img}
                     alt=""/>
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
            <div> {commentArray} </div>
        </div>
        <div>
            <textarea ref={textAreaElement} placeholder="add text" ></textarea>
            <br/>
            <button onClick={onAddCommentButtonClick}>Add</button>
        </div>
    </div>
};

export default ProductPage;