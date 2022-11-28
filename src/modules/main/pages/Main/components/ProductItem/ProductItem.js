import React from 'react'
import { useNavigate } from 'react-router-dom'



import { ToCartGreenIcon } from 'assets/icons'

import s from "./ProductItem.module.sass"

const ProductItem = (props) => {
    const { id, image, title, price} = props

const navigate = useNavigate()  
const addToCart = (event) => {
    event.stopPropagation();
    console.log(id)
    
}
    
    return (
        <div className={s.root} onClick={() => navigate(`/products/${id}`)}>
            <img className={s.image} src={image} alt='Картинка товара'/>
            {/* <div className={s.category}>{category}</div> */}
            <div className={s.title}>{title}</div> 
            <div className={s.purchase}>
            <div className={s.price}>{price}</div>
            <ToCartGreenIcon onClick={addToCart} className={s.icon}/>
            </div>
        </div>

    )

}
export default ProductItem