import React, { useEffect, useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import ItemDetailContainer from './ItemDetailContainer';
// import {collection,getDocs,deleteDoc,doc} from "firebase/firestore"
import data from "../catalogo.json"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./../styles/carrito.css"


const ItemListContainer = () => {

    // const [products,setProducts]= useState([])

    // const quilas = collection(mant,"mantequillas")
    

    // const getProducts= async () =>{
    //     const data = await getDocs(quilas)
    //     console.log ("ASDASJDOLAJDIOASJDAJDIADJQIDJADJ",data.docs)
    //     setProducts(
    //     data.docs.map((doc)=>({...doc.data(),id:doc.id}))
    // )}
    // useEffect(()=>{
    //     getProducts()
    // },[])
    
    // function pote  () {
    //     fetch("../catalogo.json")
    //     .then (res=>res.json())
    //     .then(datos => {
    //         datos.forEach(d=>{
    //             console.log(datos[0].nombre)
    //         })
    //     })
    // }

    

    return (
        
        
        
            <main className='catalogo' >
    

            <table className="table table-dark table-hover">
                <thead>
                    <tr>
                        <th>Producto</th>
                        <th>Descripcion</th>
                        <th>Comprar</th>
                    </tr>
                </thead>

            <tbody>
                    {data.map((product)=>(
                    <tr key={product.id}>
                        <td>{product.descripcion}</td>
                        <td>{product.nombre}</td>
                        
                        <td>
                            <Link to={ItemDetailContainer(product.id)} className="btn btn-light" ><FontAwesomeIcon icon="fa-solid fa-cart-shopping" />✓</Link>

                        </td>
                    </tr>


                    ))}

            </tbody>

</table>



                {/* <div className='mantes1'>
                    <h2>{data[0].nombre}</h2>
                    
                    <div className='imagenn'></div>
                    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div>
                <div className='mantes2'>
                    <h2>MANTEQUILLA SABOR DULCE</h2>
                    
                    <div className='imagenn'></div>
                    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div>
                <div className='mantes3'>
                    <h2>MANTEQUILLA SABOR CACAO</h2>
                    
                    <div className='imagenn'></div>
                    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div>
                <div className='mantes4'>
                    <h2>MANTEQUILLA SABOR SALADA</h2>
                    
                    <div className='imagenn'></div>
                    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div>
                <div className='mantes5'>
                    <h2>MANTEQUILLA SABOR PROTEIN</h2>
                    
                    <div className='imagenn'></div>
                    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div>
                <div className='mantes6'>
                    <h2>MANTEQUILLA SABOR PREMIUM</h2>
                
                    <div className='imagenn'></div>
    
                    <Link to={``}><i className="fa-solid fa-trash">Comprar</i></Link>
                </div> */}
    
    
            </main>



        
    );
}

export default ItemListContainer;
