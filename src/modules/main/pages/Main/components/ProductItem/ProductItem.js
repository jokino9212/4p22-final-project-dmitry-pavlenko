import React from 'react'
import { useNavigate } from 'react-router-dom'

import s from "./ProductItem.module.sass"

const ProductItem = (props) => {
    const { id, image, title, price, category} = props

const navigate = useNavigate()  

    return (
        <div className={s.root} onClick={() => navigate(`/products/${id}`)}>
            <img className={s.image} src={image}/>
            {/* <div className={s.category}>{category}</div> */}
            <div className={s.title}>{title}</div> 
            <div className={s.price}>{price}</div>
        </div>

    )

}
export default ProductItem