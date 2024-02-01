import React from 'react'
import Logo from '../icons_assets/Logo.svg'
export default function Footer() {
  return (
    <footer>
      <div className='logo'>
      <img src={Logo} alt='Little Lemon Logo'/>
      </div>
      <div className='copyright'>
        <p>Copyright Policy</p>
      </div>
    </footer>
  )
}
