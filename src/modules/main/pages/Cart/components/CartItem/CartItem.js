import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import { removeProductFromCart } from 'modules/main/store/slice'
import s from './CartItem.module.sass'



    
const CartItem = (props) => {
    const {id, title, description, images, price,  } = props
    const navigate = useNavigate()
    const dispatch = useDispatch()

   
    
    const onDeleteCartItem = () => {
        dispatch(removeProductFromCart(id))
    
    }
    return (
        <div className={s.root}>
            <div className={s.container}>
                < div className={s.left} >
                    <img className={s.image} src={images} alt="Картинка товара" onClick={() => navigate(`/products/${id}`)}/>
                </div >
                <div className={s.right}>
                    <div className={s.title} onClick={() => navigate(`/products/${id}`)}>{title}</div>
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


