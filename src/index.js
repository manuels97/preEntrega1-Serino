import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './components/navBar';
import Mensaje from './components/Mensaje';
import ItemListContainer from './components/p2/itemListContainer';
import ItemDetailContainer from './components/p2/ItemDetailContainer';
import "./components/styles/carrito.css" 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
 
    <BrowserRouter>
    <NavBar></NavBar>
        <Routes>
          <Route path="/" element={<Mensaje/>}/>
          <Route path="/catalogo" element={<ItemListContainer/>}/>
          <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        {/*   <Route path="/edit/:id" element={<Edit/>}/> */}
      </Routes>
    </BrowserRouter>

    </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
