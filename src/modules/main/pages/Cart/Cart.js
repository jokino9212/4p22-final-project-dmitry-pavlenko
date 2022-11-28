import React, { useState } from "react";
import { MainLayout } from 'shared';
import { CART_PRODUCTS } from '_mocks/mocks'
import { CartItem } from './components';

import s from './Cart.module.sass'

const Cart = () => {
    const [cartProducts, setCartProducts] = useState(CART_PRODUCTS)
    return (
        <MainLayout>
            {cartProducts.map((cartProduct) => (
                <CartItem
                    key={cartProduct.id}
                    id={cartProduct.id}
                    title={cartProduct.title}
                    images={cartProduct.images}
                    description={cartProduct.description}
                    price={cartProduct.price}
                    cartProducts={cartProducts}
                    setCartProducts={setCartProducts}
                />
            ))}
            <div className={s.total}>
            <div className={s.sum}>Общая сумма 300$</div>
            <button className={s.order}>Оформить заказ</button>
            </div>
        </MainLayout>
    )
}

export default Cart