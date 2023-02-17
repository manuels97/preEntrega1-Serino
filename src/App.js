import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Mensaje from './components/Mensaje';
import ItemListContainer from './components/p2/itemListContainer';
import ItemDetailContainer from './components/p2/ItemDetailContainer';
import "./components/styles/carrito.css" 
import "./components/p2/style-detail.css"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
 
    <BrowserRouter>
    <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Mensaje/>}/>
          <Route path="/catalogo" element={<ItemListContainer/>}/>
          <Route path="/item/:productId" element={<ItemDetailContainer/>}/>
        {/*   <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </BrowserRouter>

    </div>
);

export default App;
