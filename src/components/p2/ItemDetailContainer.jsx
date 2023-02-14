import React from 'react';
import data from "../catalogo.json"








const ItemDetailContainer = (props) => {
    return (
        <div>
            <div className='mantes1'>
                    <h2>{data[0].nombre}</h2>
                    
                    <div className='imagenn'></div>
                    
                </div>
        </div>
    );
}

export default ItemDetailContainer;
