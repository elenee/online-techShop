import React from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import './NavButton.css'

const NavButton = () => {
  return (
    <button className='btn'>
        <span className='btn-icon'><AiOutlineShoppingCart /></span>
        <span className='btn-text'>Your Cart</span>
        <span className='btn-num'>2</span>
    </button>
  )
}

export default NavButton