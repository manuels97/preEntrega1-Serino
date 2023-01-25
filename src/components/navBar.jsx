import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import CardWidget from './cardWidget';
import "./styles/Mensaje.css"
import "./styles/navBar.css"
import "./styles/header.css"


const NavBar = () => {
   
    return (

    <div>
        <header className='headerp'>
        <div className='carrito'>
            <CardWidget></CardWidget>
        </div>
        <div className='header-container'>

            <div className='menu-button'>
            <FontAwesomeIcon icon={faBars} size="lg" color='black' />
            </div>

            <nav className='nav-c'>
                <ul className='nav-container'>
                    <li>
                        <a href='/'>INCIO</a>
                    </li>
                    <li className='productos-nav'>
                        <a href='/'>PRODUCTOS</a>
                    </li>
                    <li>
                        <a href='/'>NOSOTROS</a>
                    </li>
                    <li>
                        <a href='/'>CONTACTO</a>
                    </li>
                </ul>
            </nav>

            </div>
        </header>

        </div>



        




    
    );
}

export default NavBar;
