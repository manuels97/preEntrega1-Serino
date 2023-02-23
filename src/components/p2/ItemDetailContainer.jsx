import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from "../catalogo.json"
import { ItemDetail } from './ItemDetail';









const ItemDetailContainer = (props) => {

    const {productId} = useParams();
    const [item, setItem] = useState({});

    const getItem = (id)=>{
        return new Promise((resolve, reject)=>{
            const product = data.find(item=>item.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect(()=>{
        const getProducto = async()=>{
            const producto = await getItem(productId);
            setItem(producto);
        }
        getProducto();
    },[productId])

    

    return (
        <div>
            <div className='mantes1'>
                    <h2>{data[productId-1].nombre}</h2>
                    {/* No se por qué no muestra esta imagen */}
                    <img src={data[productId-1].img} alt="mante"></img> 

                    <p>{data[productId-1].descripcion}</p>
                    <p>Precio: ${data[productId-1].precio}</p>
                    <button className='compra'>COMPRAR</button>

                    {/* <ItemDetail item={item}></ItemDetail> */}
                    
                
                
                </div>
        </div>
    );
}

export default ItemDetailContainer;
