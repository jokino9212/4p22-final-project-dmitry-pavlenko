import s from './CartItem.module.sass'




const CartItem = (props) => {
    const {id, title, description, images, price, cartProducts, setCartProducts } = props
    const onDeleteCartItem = () => {
        setCartProducts(cartProducts.filter(product => product.id !== id))
    }
    return (
        <div className={s.root}>
            <div className={s.container}>
                < div className={s.left} >
                    <img className={s.image} src={images} alt="Картинка товара"/>
                </div >
                <div className={s.right}>
                    <div className={s.title}>{title}</div>
                    <div className={s.description}>{description}</div>
                    <div className={s.priceBox}>
                        <div className={s.priceAmount}>{price} $</div>
                        <div className={s.counter}>counter</div>
                        <button onClick={onDeleteCartItem}className={s.delete}>Удалить</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem


