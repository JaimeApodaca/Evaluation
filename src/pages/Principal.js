import {React, useEffect} from 'react'
import Cookies from 'universal-cookie'
import { Navbar } from '../Components/Navbar';
import { Sidebar } from '../Components/Sidebar';
const cookies = new Cookies();

export const Principal = () => {
  
 
   

  useEffect(() => {
    if(!cookies.get('correo')) {
      window.location.href='./'
    }
   }, [])
  return (
    <div> 
        <Navbar nombre="Principal" />
       <div className='flex'>
       <Sidebar />
        <div className='content'>
            
        </div>

        </div>
    </div>
  
  )
}
