import React from 'react';
import styles from './../../App.module.css';

const ProductPage = ({productPage: {product, comments, currentMessage}, addCurrentComment, addComment }) => {
    // debugger
    let commentsArray = comments.map((item, id) => {
        return (
            <div key={id}>{item}</div>
        );
    });

    let onTextareaValueChange = (e) => {
        addCurrentComment(e.currentTarget.value)
    };

    let onAddCommentButtonClick = () => {
        addComment(currentMessage)
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
            <div> {commentsArray} </div>
        </div>
        <div>
            <textarea onChange={onTextareaValueChange} value={currentMessage} placeholder="add text"/>
            <br/>
            <button onClick={onAddCommentButtonClick}>Add</button>
        </div>
    </div>
};

export default ProductPage;