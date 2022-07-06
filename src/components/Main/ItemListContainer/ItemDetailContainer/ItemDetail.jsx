import React from 'react'
import "./itemDetail.css"
import { ItemCount } from '../ItemCount';

const ItemDetail = ({itemDetail}) => {
    
   
console.log(itemDetail,"bo");

const {img,name,id,detail,precio,stock,inicial} = itemDetail
   
   

  return (
    <div >
        <div className='detailCard'>
        <img src={img} alt={name} />
        <div id={id}>
        <p>{name}</p>
        <p>{detail}</p>
        <p>${precio}</p>
        <ItemCount stock={stock}inicial={1}/>

        </div>
        </div>
    </div>
  )
}

export default ItemDetail