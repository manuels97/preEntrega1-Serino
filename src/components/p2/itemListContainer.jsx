import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useParams } from 'react-router-dom';
import data from "../catalogo.json"
import "./../styles/carrito.css"
import { ItemList } from './ItemList';


const ItemListContainer = () => {
    const {tipoProducto} = useParams();

    const [productos, setProductos] = useState([]);

    let promesa = new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(data);
        }, 2000);
    })

    useEffect(()=>{
        promesa.then(resultado=>{
            if(!tipoProducto){
                setProductos(resultado)
            } else{
                const nuevaLista = resultado.filter(item=>item.categoria === tipoProducto);
                setProductos(nuevaLista)
            }
        })
    },[tipoProducto])
    

    

    return (
        
    <div className="catalogo">
        <h1>Lista de productos</h1>
        <ItemList items={productos}/>
    </div>
        

        
    );
}

export default ItemListContainer;
