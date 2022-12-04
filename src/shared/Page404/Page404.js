import React from 'react';
import s from './Page404.module.sass'


const Page404 = () => {
    return (
        <div className={s.root}>
            <div className={s.title}>
               Page404
            </div>
            <div className={s.subtitle}>
                Этой страницы не существует
            </div>
        </div>
    )
}

export default Page404