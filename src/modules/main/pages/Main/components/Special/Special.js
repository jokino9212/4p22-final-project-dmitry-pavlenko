import React from 'react'
import s from "./Special.module.sass"




const Special = (props) => {


    return (

        <div className={s.special}>
            <div className={s.special__boxLeft}>
              
                <h2 className={s.special__title}>Мебель для гостиной</h2>
                <span className={s.special__text}>У тебя нет стула. Готовы ли вы к росту? Делайте покупки с нами со скидкой 40%!</span>
                <div className={s.special__pricebox}>
                    <span className={s.special__price}>6000₽ </span>
                    <span className={s.special__throuh}>8000 ₽</span>
                </div>
            </div>
            <div className={s.special__boxRight}>
                <h2 className={s.special__title}>Современный стул</h2>
                <span className={s.special__text}>Горячие стулья современной эпохи теперь доступны на нашем складе.</span>
                <div className={s.special__pricebox}>
                    <span className={s.special__price}>3000₽ </span>
                    <span className={s.special__throuh}>5000₽ ₽</span>
                </div>
            </div>
        </div>


    )

}
export default Special

