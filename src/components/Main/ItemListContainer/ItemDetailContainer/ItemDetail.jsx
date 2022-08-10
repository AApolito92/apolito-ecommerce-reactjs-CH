import React from 'react'
import "./itemDetail.css"
import { ItemCount } from '../ItemCount';
import { useState,useContext } from 'react';
import { Link } from 'react-router-dom';
import { contextoCarrito } from '../../Context/ContextCart';
import "animate.css"

const ItemDetail = ({itemDetail}) => {

const {img,name,id,detail,precio,stock} = itemDetail

//console.log (itemDetail, "detalle item")

const [finalizar, setFinalizar] = useState(false) ;

const {addItem} = useContext(contextoCarrito);


const onAdd = (cantidad) => {  
  //console.log(cantidad ,"cantidad tipo waat")
  //console.log(`Compraste ${cantidad} unidades`);
  setFinalizar(true);
  const newItem = {...itemDetail, qty: cantidad }
  addItem(newItem,cantidad)
 }

   

  return (
    <div className='detailContainer animate__animated animate__fadeInTopLeft' >
        <img src={img} alt={name} />
        <div className='detailCard'>        
        <div id={id}>
        <h5>{name}</h5>
        <p>{detail}</p>
        <p>${precio}</p>

        {finalizar ? 
        <> <Link to="/cart"> <button>Ir al carrito!</button> </Link> <Link to="/"> <button>Seguir comprando!</button> </Link> </>
        : 
        <ItemCount stock={stock} inicial={1} onAdd={onAdd}/> }
        

        </div>
        </div>
    </div>
  )
}

export default ItemDetail