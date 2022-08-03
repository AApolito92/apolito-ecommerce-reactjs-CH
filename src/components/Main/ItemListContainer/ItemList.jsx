import React from 'react'
import Items from './item/Items'

const ItemList = ({productList}) => {
  
  return (
    
    <>      
      <div className='itemsHolder'>

          {productList.map((product)=> <Items key={product.id} product={product}/>)}
          
      </div>
    </>
  )
}

export default ItemList