import '../css/App.css'
import {React, useEffect, useState} from 'react'
import axios from 'axios';
import Cookies from 'universal-cookie'
import { Navbar } from '../Components/Navbar';
import { Sidebar } from '../Components/Sidebar';
import MaterialTable from 'material-table';
const cookies = new Cookies();
export const Productos = () => {
  const [data,setData] = useState([]);

  const baseUrl = 'https://restservernodeapp.herokuapp.com/api/productos/?desde=0&limite=3'
 const getUsuarios = async () => {
  await axios.get(baseUrl)
  .then(response=>{
    
    const data = response.data;
    const {productos} = data
    console.log(productos)
    setData(productos);
  })
  .catch(error=>{
    console.log(error)
  })
  }
      useEffect(() => {
        getUsuarios();
        if(!cookies.get('correo')) {
          window.location.href='./'
        }
       }, [])

   const columnas= [
     {
       title: 'Nombre',
       field: 'nombre'
     },
     {
      title: 'Precio',
      field: 'precio'
    },
    {
      title: 'Disponible',
      field: 'disponible'
    },
    {
      title: 'Categoria',
      field: 'categoria.nombre'
    },
     
   ]
    
      
  return (
    <div>
           <div>
           <Navbar nombre="Productos"/>
       <div className='flex'>
       <Sidebar />
        <div className='content'>
        <MaterialTable options={{toolbar: false, paging: false, search: false, }}  columns={columnas} data={data}/>
        
        </div>

        </div>
    </div>
    </div>
  )
}
