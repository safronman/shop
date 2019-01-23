import React from 'react';
import Comment from "./Comment";
import styles from './../../App.module.css';

const ProductPage = () => {
    return <div>
        <div className={styles.productCard}>
            <div>
                <img className={styles.productCard}
                     src="https://content2.onliner.by/catalog/device/header/272d80e5c1b51824c5034a0dffb29254.jpeg"/>
            </div>
            <div>
                <h1>Смартфон Samsung Galaxy S8</h1>
                <div>
                    Android, экран 5.8" AMOLED (1440x2960), Exynos 8895, ОЗУ 4 ГБ, флэш-память 64 ГБ, карты
                    памяти, камера 12 Мп, аккумулятор 3000 мАч, 2 SIM, цвет черный
                </div>
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