import { useSelector } from 'react-redux';

import { MainLayout } from 'shared';
import { CartItem } from './components';

import s from './Cart.module.sass'



const Cart = () => {
    const { cartProducts } = useSelector((state) => state.mainReducer)

    const setOrder = () => {
        console.log(cartProducts)
    }

    return (
        <MainLayout>
            <div className={s.root}>
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
                    <button
                        className={s.order}
                        tabIndex='0'
                        type={'submit'}
                        onClick={setOrder}

                    >Оформить заказ</button>
                </div>
            </div>
        </MainLayout>
    )
}

export default Cart