import "../styles/Item.css"
import {Link} from 'react-router-dom';

export const Item = ({item})=>{
    return(
        <div className="productos">
            <img src={item.img} alt={item.nombre}/>
            <div className="imagen2"></div>
            <h4>{item.nombre}</h4>
            <p>$ {item.precio}</p>
            <Link to={`/item/${item.id}`}>
                <button className='boton-ver'>Ver detalle...</button>
            </Link>
        </div>
    )
}