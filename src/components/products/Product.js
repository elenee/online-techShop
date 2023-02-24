import React from 'react'
import './Product.css'
import ProductForm from './ProductForm'

const Product = (props) => {
  return (
    <li className='item'>
        <div className='list-item'>
            <h3>{props.name}</h3>
            <div>{props.description}</div>
            <div className='item-price'>${props.price}</div>
        </div>
        <ProductForm id={props.id}/>
    </li>
  )
}

export default Product