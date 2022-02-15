import axios from 'axios';
import {React, useState, useEffect} from 'react'
import '../css/App.css'
import Cookies from 'universal-cookie'

export const Login = () => {
    const [user, setuser] = useState({
      'correo': '',
      'password': ''
    });
    const [sesion,setSesion] = useState(true);
    const [img,setImg] = useState();
    const [nombre,setNombre] = useState();
    const {correo, password} = user;

    const onChange = e => {
      setuser({
          ...user,
          [e.target.name] : e.target.value
      });
  }
   

    const baseUrl = 'https://restservernodeapp.herokuapp.com/api/auth/login'
    const cookies = new Cookies();
   const IniciarSesion = async () => {
    await axios.post(baseUrl, {correo,password} )
    .then(response=>{
      console.log(response.data)
      return response.data;
    })
    .then(response=>{
        const { img, nombre } = response.usuario
        cookies.set('correo', response.correo, {path: "/"});
        cookies.set('password', response.password, {path: "/"});
        setImg(img);
        setNombre(nombre);
         window.location.href=`/Principal`
         
         
    })
    .catch(error=>{
      setSesion(false);
      console.log(error)
    })
    }

    useEffect(() => {
     if(cookies.get('correo')) {
       window.location.href='/Principal'
     }
    }, [])
    
   console.log(nombre)
   console.log(img)
  return (
    <div> 
        <header className='headerLogin'>
      <h1> Iniciar Sesion</h1>
      </header>
       <div className='form-2'>
        <form onSubmit={(e) => e.preventDefault()}> 
        <label> Correo </label>
        <input type='email' name='correo' onChange={onChange}/>
        <label> Contraseña </label>
        <input type='password' name='password' onChange={onChange} />
        <div className='divButton'>
        <button type='submit' className='buttonLogin' onClick={IniciarSesion} > Iniciar Sesion </button>
        {sesion ? <></> : <p className='mensaje'> Correo y/o contraseña incorrectos </p>}
        
        </div>

        </form>
        </div>
    </div>
  )
}
