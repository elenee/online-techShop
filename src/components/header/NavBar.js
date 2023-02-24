import React from 'react'
import './NavBar.css'
import cover from '../../assets/cover.jpg'
import NavButton from './NavButton'

const NavBar = () => {
  return (
    <div>
        <header>
            <h1>GADJETS</h1>
            <NavButton />
        </header>
        <div className='cover-container'>
            <img className='cover' src={cover}/>
        </div>
    </div>
  )
}

export default NavBar