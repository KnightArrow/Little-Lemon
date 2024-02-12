import React , {useState} from 'react'
import Logo from '../icons_assets/Logo.svg'
import '../css/Header.css'
import Main from './Main';
import Footer from './Footer';
import { Route, Routes} from 'react-router-dom';
import BookingPage from './BookingPage';

export default function Header() {
  return (
    <>
      <div className='header'>
        <img src={Logo} alt='Little Lemon Logo'/>
        <nav role="navigation">   
            <ul>
              <li><a href='/' className='link'role='link'>Home</a></li>
              <li><a href='#' className='link' role='link'>About</a></li>
              <li><a href='#' className='link' role='link'>Menu</a></li>
              <li><a href='/Reservations' className='link' role='link'>Reservations</a></li>
              <li><a href='#' className='link' role='link'>Order Online</a></li>
              <li><a href='#' className='link' role='link'>Login</a></li>
            </ul>
        </nav>     
      </div>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/Reservations' element={<BookingPage/>}></Route>
        </Routes>
        <Footer/>
    </>
  )
}
