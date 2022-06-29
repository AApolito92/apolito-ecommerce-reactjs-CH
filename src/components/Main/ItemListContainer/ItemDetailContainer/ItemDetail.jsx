import React from 'react'
import "./itemDetail.css"

const ItemDetail = ({itemDetail}) => {
    
   

  const {name,id,detail,img,precio} = itemDetail;


   // console.log(img,name,id)

   

  return (
    <div >
        <div className='detailCard'>
        <img src={img} alt={name} />
        <div id={id}>
        <p>{name}</p>
        <p>{detail}</p>
        <p>${precio}</p>
        </div>
        </div>
    </div>
  )
}

export default ItemDetail