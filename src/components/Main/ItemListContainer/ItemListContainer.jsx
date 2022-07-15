import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { getData } from '../../../mocks/fakeApi';
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import {getDocs, collection, query} from "firebase/firestore"

export const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState ([]);
  const [mostrar, setMostrar] = useState(true)  ;
  const {categoriaId} = useParams();


console.log(db);

  useEffect (()=> {

    const productListCollection = collection(db,"productCollection");
    getDocs(productListCollection)
    .then (res => {console.log(res.docs)

    })

    getData(categoriaId)
    .then((res)=> setProductList(res))
    .catch((error)=> console.log(error))
    .finally(()=>setMostrar(false))
    
  },[categoriaId])
 

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
