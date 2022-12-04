import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, } from 'react-redux'

import { addProductToCart } from 'modules/main/store/slice'

import { CartIcon } from 'assets/icons'

import s from "./ProductItem.module.sass"

const ProductItem = (props) => {
    const { id, image, title, price} = props
    const navigate = useNavigate()  

// REDUX
   
    const dispatch = useDispatch()



const onAddToCart = (event) => {
    event.stopPropagation();
  
    dispatch(addProductToCart(id))
    
}
    
    return (
        <div className={s.root} onClick={() => navigate(`/products/${id}`)}>
            <img className={s.image} src={image} alt='Картинка товара'/>
            <div className={s.title}>{title}</div> 
            <div className={s.purchase}>
            <div className={s.price}>{price}</div>
            <CartIcon onClick={onAddToCart} className={s.icon}/>
            </div>
        </div>

    )

}
export default ProductItem