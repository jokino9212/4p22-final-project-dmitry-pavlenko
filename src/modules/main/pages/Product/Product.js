import React from "react";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductToCart } from 'modules/main/store/slice'

import { MainLayout } from 'shared';
import api from 'modules/main/config/api';

import s from './Product.module.sass';



const Product = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [productInfo, setProductInfo] = useState({})
    const params = useParams()
    const navigate = useNavigate()

    // Redux
    const dispatch = useDispatch()

    const onAddToCart = (event) => {
        event.stopPropagation();
        console.log(productInfo.id)
        dispatch(addProductToCart(productInfo.id))
    }

    useEffect(() => {
        setIsLoading(true)
        api.fetchProduct(params.productId).then((data) => {

            setProductInfo(data)
            setIsLoading(false)
        })
    }, [params])


    
    return (
        <MainLayout>
            <div className={s.root}>
                <button onClick={() => navigate('/')}
                    className={s.return}>Назад</button>
                <div className={s.container}>
                    {isLoading ? (
                        <h1>Loading...</h1>
                    ) : productInfo ? (
                        <>
                            <div className={s.left}>
                                <img className={s.image} src={productInfo.images} alt='' />
                            </div>
                            <div className={s.right}>
                                <div className={s.title}>{productInfo.title}</div>
                                <div className={s.description}>{productInfo.description}</div>
                                <div className={s.priceBox}>
                                    <div className={s.priceText}>Цена: </div>
                                    <div className={s.priceAmount}>{productInfo.price} </div>
                                    {/* <div className={s.counter}>counter</div> */}
                                </div>
                                <button onClick={onAddToCart} className={s.button}>В корзину</button>
                            </div>
                        </>

                    ) : (
                        'Нет товара'
                    )}
                </div>
            </div>
        </MainLayout>
    )
}

export default Product