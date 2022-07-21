import React from 'react'
import "./itemDetail.css"
import { ItemCount } from '../ItemCount';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoCarrito } from '../../Context/ContextCart';


const ItemDetail = ({itemDetail}) => {

const {img,name,id,detail,precio,stock} = itemDetail

console.log (itemDetail, "detalle item")

const [finalizar, setFinalizar] = useState(false) ;

const {addItem} = useContext(contextoCarrito);


const onAdd = (cantidad) => {  
  console.log(cantidad ,"cantidad tipo waat")
  console.log(`Compraste ${cantidad} unidades`);
  setFinalizar(true);
  const newItem = {...itemDetail, qty: cantidad }
  addItem(newItem,cantidad)
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