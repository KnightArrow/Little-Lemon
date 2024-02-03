import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import '../css/Footer.css';
export default function Footer() {
  return (
    <>
      <footer>
        <div className='logo'>
        <img src={Logo} alt='Little Lemon Logo'/>
        </div>
        <div className='copyright'>
          <p>Copyright Policy</p>
        </div>
      </footer>
    </>
  )
}
