import './styles/navBar.css';
import {NavLink, Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



export const Navbar = () =>{
    return(
        <nav className='navBar'>
            <Link to="/">
                <div>
                    <h1 className='logo'>Q</h1>
                </div>
            </Link>
            <div className='navegacion'>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                    to="/">Inicio</NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                    to="/catalogo/normal">Mantequillas normales</NavLink>
                    <NavLink className={({isActive})=>isActive ? "claseActive": "claseInactive"}
                    to="/catalogo/big">Mantequillas BIG</NavLink>
                
                <FontAwesomeIcon icon="fa-sharp fa-solid fa-cart-shopping" />
                </div>
                <div>
                
                
            </div>
        </nav>
    )
}

