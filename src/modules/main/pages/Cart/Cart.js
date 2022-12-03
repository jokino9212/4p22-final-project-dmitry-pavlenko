import { useState } from 'react';
import { useSelector } from 'react-redux';

import { MainLayout } from 'shared';
import { CartItem } from './components';

import s from './Cart.module.sass'

const Cart = () => {
    const { cartProducts } = useSelector((state) => state.mainReducer)
    // const [hidingSum, setHidingSum] = useState(false)

    const setOrder = () => {
        console.log(cartProducts)
    }

    return (
        <MainLayout>
            {cartProducts.length > 0 ? cartProducts.map((cartProduct) => (
                <CartItem
                    key={cartProduct.id}
                    id={cartProduct.id}
                    title={cartProduct.title}
                    images={cartProduct.images}
                    description={cartProduct.description}
                    price={cartProduct.price}
                />
            )) : 'Нет продуктов'}
            <div className={s.total}>
                {/* <div hidden={hidingSum} className={s.sum}>Общая сумма 300$</div> */}
                <button
                    className={s.order}
                    tabIndex='0'
                    type={'submit'}
                    onClick={setOrder}
                        
                  
                >Оформить заказ</button>
            </div>
        </MainLayout>
    )
}

export default Cart