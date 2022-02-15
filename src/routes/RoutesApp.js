
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Categorias } from '../pages/Categorias';
import {Login} from '../pages/Login'
import { Principal } from '../pages/Principal';
import { Productos } from '../pages/Productos';
import { Usuarios } from '../pages/Usuarios';




function RoutesApp() {
   return (
    <div className='RoutesApp'>  
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Login/>} />  
      <Route path="/Principal" element={<Principal/>} />
      <Route path="/usuarios" element={<Usuarios />} />
      <Route path="/productos" element={<Productos />} />
      <Route path="/categorias" element={<Categorias />} />
      </Routes>
  </BrowserRouter> 
    </div>
  );
}

export default RoutesApp;
