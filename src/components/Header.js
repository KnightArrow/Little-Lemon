import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import '../css/Header.css'

export default function Header() {
  return (
    <>
    <div className='header'>
      <img src={Logo} alt='Little Lemon Logo'/>
      <nav>   
          <ul>
            <li><a href='#' className='link'>Home</a></li>
            <li><a href='#' className='link'>About</a></li>
            <li><a href='#' className='link'>Menu</a></li>
            <li><a href='#' className='link'>Reservations</a></li>
            <li><a href='#' className='link'>Order Online</a></li>
            <li><a href='#' className='link'>Login</a></li>
          </ul>
      </nav>     
    </div>
      
    </>
  )
}
