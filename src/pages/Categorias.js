import '../css/App.css'
import {React, useEffect, useState} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie'
import { Navbar } from '../Components/Navbar';
import { Sidebar } from '../Components/Sidebar';
import MaterialTable from 'material-table';
const cookies = new Cookies();
export const Categorias = () => {
  const [data,setData] = useState([]);

  const baseUrl = 'https://restservernodeapp.herokuapp.com/api/categorias/'
 const getProducts = async () => {
  await axios.get(baseUrl)
  .then(response=>{
    
    const data = response.data;
    const {categorias} = data
    setData(categorias);
  })
  .catch(error=>{
    console.log(error)
  })
  }
   console.log(data)
      useEffect(() => {
        getProducts();
        if(!cookies.get('correo')) {
          window.location.href='./'
        }
       }, [])
   console.log(data)
   const columnas= [
     {
       title: 'Nombre',
       field: 'nombre'
     },
   
     
   ]
  return (
    <div>
             <Navbar nombre="Categorias"/>
       <div className='flex'>
       <Sidebar />
        <div className='content'>
        <MaterialTable options={{toolbar: false, paging: false, search: false, }}  columns={columnas} data={data}/>
        
        </div>

        </div>
    </div>
  )
}
