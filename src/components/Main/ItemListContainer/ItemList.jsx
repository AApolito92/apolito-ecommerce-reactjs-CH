import React from 'react'
import Items from '../item/Items'

const ItemList = ({productList}) => {
  console.log(productList, "array item list")
  return (
    
    <div>
      
    <div className='itemsHolder'>
      
        {productList.map((product)=> <Items key={product.id} product={product}/>)}
    </div>
    </div>
  )
}

export default ItemList