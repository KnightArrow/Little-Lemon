import React from 'react'
import Logo from '../icons_assets/Logo.svg'
import '../css/Footer.css';
import ReactDOMServer from 'react-dom/server';
export default function Footer() {
  const HandleClick=(a)=>{
    return(alert(ReactDOMServer.renderToString('Checking Alert Function')));
  }
  return (
    <>
      <footer>
        <div className='logo'>
        <img src={Logo} alt='Little Lemon Logo' onClick={HandleClick}/>
        </div>
        <div className='copyright'>
          <p>Copyright Policy</p>
        </div>
      </footer>
    </>
  )
}
