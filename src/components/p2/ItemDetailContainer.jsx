import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../catalogo.json"









const ItemDetailContainer = (props) => {

    const {productId} = useParams();

    

    return (
        <div>
            <div className='mantes1'>
                    <h2>{data[productId-1].nombre}</h2>
                    {/* No se por qué no muestra esta imagen */}
                    <img src={data[productId-1].img} alt="mante"></img> 

                    <p>{data[productId-1].descripcion}</p>
                    <p>Precio: ${data[productId-1].precio}</p>
                    <button className='compra'>COMPRAR</button>
                    
                
                
                </div>
        </div>
    );
}

export default ItemDetailContainer;
