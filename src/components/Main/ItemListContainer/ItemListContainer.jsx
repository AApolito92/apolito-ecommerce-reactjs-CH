import React from 'react';
import { useState,useEffect } from 'react';
import ItemList from './ItemList';
import './ItemListContainer.css'
import { getData } from '../../../mocks/fakeApi';
<<<<<<< HEAD
import ItemDetailContainer from './ItemDetailContainer/Itemdetailcontainer';

=======
import { useParams } from 'react-router-dom';
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6

export const ItemListContainer = ({greeting}) => {

  const [productList, setProductList] = useState ([]);
  const [mostrar, setMostrar] = useState(true)  ;

  const {categoriaId} = useParams();



  useEffect (()=> {
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
