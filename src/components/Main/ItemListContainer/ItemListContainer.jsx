import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { useParams } from 'react-router-dom';
import { db } from '../../../firebase/firebase';
import {getDocs, collection, query,where} from "firebase/firestore"
import { FadeLoader } from 'react-spinners';


export const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState ([]);
  const [mostrar, setMostrar] = useState(true)  ;
  const {categoriaId} = useParams();

 

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
      setMostrar(false);   

    })
   
    
  },[categoriaId])


 

  return (
    <div className="mainBody">
        
        <>
        <h2>Bienvenidos a {greeting}</h2>
        <h3>Productos</h3>
       { mostrar ? <FadeLoader className='loaderItemlist' color="#e9dfdf" loading/> : <ItemList productList={productList}/>}           
        </>
    </div>
  )
}
