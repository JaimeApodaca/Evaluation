import React from 'react'
import '../css/App.css';
import { SidebarData } from './SidebarData';
export const Sidebar = () => {
     
   
  return (
    <div className='sidebar'>
        <div className='block'>
         <div className='circulo'>
            <img className='imagen' src='https://res.cloudinary.com/dybumlk9v/image/upload/v1642632990/trfhklx6dni999oqdank.jpg' alt='imagen' />
          
        </div> 
        <div>
        <h1 className='tituloNombre'> Roberto </h1>
        <ul className='lista'>
            {SidebarData.map((item, index) => {
                return(
                    <li  key={index} className='row' onClick={() => {
                        window.location.href = `${item.link}`
                    }}>
                    <div> {item.title} </div>
                    </li>
                )
            })}
        </ul>
        </div>
        </div>
    </div>
  )
}
