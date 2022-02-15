import React from 'react'
import '../css/App.css';
import Cookies from 'universal-cookie';
import { FiSettings } from "react-icons/fi";


export const Navbar = ({nombre}) => {
  const cookies = new Cookies();
  const cerrarSesion = () => {
    cookies.remove('correo', {path: "/"});
    cookies.remove('password', {path: "/"})
    window.location.href='./';
  }
  return (
    <div>
        <header className='Navbar'>
          <div >
          <div className='nombreHeader'>
          {nombre}
            </div>  
            <div className='cerrarSesion'>
              <FiSettings size={35} onClick={cerrarSesion}/>
        
        </div>
        </div>
        </header>
    </div>
  )
}