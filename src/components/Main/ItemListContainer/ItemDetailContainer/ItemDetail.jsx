import React from 'react'
import "./itemDetail.css"
import { ItemCount } from '../ItemCount';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ItemDetail = ({itemDetail}) => {
    
   
console.log(itemDetail,"bo detail");

const {img,name,id,detail,precio,stock,inicial} = itemDetail

const [finalizar, setFinalizar] = useState(false) ;


const onAdd = (cantidad) => {

  console.log(`Compraste ${cantidad} unidades`);
  setFinalizar(true);
 }

   

  return (
    <div >
        <div className='detailCard'>
        <img src={img} alt={name} />
        <div id={id}>
        <p>{name}</p>
        <p>{detail}</p>
        <p>${precio}</p>

        {finalizar ? <Link to="/cart"> <button>Finalizar compra</button> </Link> : <ItemCount stock={stock} inicial={1} onAdd={onAdd}/> }
        

        </div>
        </div>
    </div>
  )
}

export default ItemDetail