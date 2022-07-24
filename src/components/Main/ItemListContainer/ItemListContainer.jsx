import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import {getDocs, collection, query,where} from "firebase/firestore"

export const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState ([]);
  const [mostrar, setMostrar] = useState(true)  ;
  const {categoriaId} = useParams();

 // console.log (categoriaId);

//console.log(db);

  useEffect (()=> {

    const productListCollection = collection(db,"productCollection");

    const consulta = categoriaId?
     query(productListCollection, where("categoria","==", categoriaId))
     :
     productListCollection 
    getDocs(consulta)

    .then (res => {
      
      const lista = res.docs.map(docData => {

        return {
          id: docData.id,
          ...docData.data()
        }
      })
      setProductList(lista);
      //console.log(lista);
      setMostrar(false);   

    })
   
    
  },[categoriaId])

  // .finally (
  //   setMostrar(false)
  // )
 

  return (
    <div>
        <h2>Bienvenidos a {greeting}</h2>
        <h3>Productos</h3>
        <div className='productContainer'>

       { mostrar ? <p>Loading...</p> : <ItemList productList={productList}/>}   

         
          
        </div>
    </div>
  )
}
