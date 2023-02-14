import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CardWidget from './cardWidget';
import "./styles/Mensaje.css"
import "./styles/navBar.css"
import "./styles/header.css"
import { BrowserRouter,Routes,Route, Link } from "react-router-dom";
import ItemListContainer from './p2/itemListContainer';
import ItemDetailContainer from './p2/ItemDetailContainer';
import Mensaje from './Mensaje';


const NavBar = () => {
   
    return (

    <div>
        <header className='headerp'>
        {/* <div className='carrito'>
            <CardWidget></CardWidget>
        </div> */}
        <div className='header-container'>

            {/* <div className='menu-button'>
            <FontAwesomeIcon icon={faBars} size="lg" color='black' />
            </div> */}


           
                <nav className='navBar'>
                    <ul>
                        <li>
                            <Link to="/"> HOME </Link>
                        </li>
                        <li>
                        <Link to="/catalogo"> CATALOGO</Link>
                        </li>
                        <li className='productos-nav'>
                            <Link to='/about'> ABOUT </Link>
                        </li>
                        <li>
                        <Link > CONTACTO</Link>
                        </li>
                    </ul>
                </nav>



                





         

            </div>
        </header>

        </div>



        




    
    );
}

export default NavBar;
