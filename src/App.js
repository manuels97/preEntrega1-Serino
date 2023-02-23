import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {Navbar} from './components/navBar';
import Mensaje from './components/Mensaje';
import ItemListContainer from './components/p2/itemListContainer';
import ItemDetailContainer from './components/p2/ItemDetailContainer';
import "./components/styles/carrito.css" 
import "./components/p2/style-detail.css"



function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Mensaje/>}/>
          <Route path="/catalogo/:tipoProducto" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </div>
  ); 
}


export default App;
