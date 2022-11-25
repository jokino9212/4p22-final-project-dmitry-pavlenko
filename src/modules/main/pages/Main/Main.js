import React, { useEffect, useState } from "react";

import { MainLayout } from 'shared';
import api from 'modules/main/config/api';
import { ProductItem, Special } from './components';


import s from './Main.module.sass';

const Main = () => {
    const [products, setProducts] = useState([])
    const [isLoading, setIsLoading] = useState(false)


    useEffect(() => {
        setIsLoading(true)
        api.fetchProducts().then((data) => {
            setProducts(data)
            setIsLoading(false)
        })
    }, [])



    return (
        <MainLayout>
            <div className={s.root}>
                <Special />
                <div className={s.navList}>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Все</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Диваны</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Столы</a>
                    </div>
                    <div className={s.navItem}>
                        <a className={s.navLink} href=''>Стулья</a>
                    </div>
                </div>
                <div className={s.wrapper}>
                    {!isLoading ? (
                        products.map((product) => (
                            <ProductItem
                                key={product.id}
                                id={product.id}
                                // image={product.image}
                                image={product.images[0]}
                                // category={product.category}
                                title={product.title}
                                price={product.price}
                            />
                        ))
                    ) : (
                        <h1>Loading...</h1>
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Main