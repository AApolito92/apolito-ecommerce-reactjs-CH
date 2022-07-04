import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { getData } from '../../../mocks/fakeApi';
import ItemDetailContainer from './ItemDetailContainer/ItemDetailContainer';


export const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState ([])
  const [mostrar, setMostrar] = useState(true)  

  useEffect (()=> {
    getData
    .then((res)=> setProductList(res))
    .catch((error)=> console.log(error))
    .finally(()=>setMostrar(false))
    
  },[])
  
  console.log(productList)

  return (
    <div>
        <h2>Bienvenidos a {greeting}</h2>
        <h3>Productos</h3>
        <div className='productContainer'>

       { mostrar ? <p>Loading...</p> : <ItemList productList={productList}/>}   

       { mostrar ? <p>Loading detail...</p> : <ItemDetailContainer/>  }   
             
          
        </div>
    </div>
  )
}
