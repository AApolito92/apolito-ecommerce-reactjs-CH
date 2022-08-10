import React from 'react'
import Items from './item/Items'

const ItemList = ({productList}) => {

  console.log(productList,"lista productos");
  
  return (
    
    <>      
      <div className='itemsHolder'>

          {productList.slice(0,6).map((product)=> <Items key={product.id} product={product}/>)}
          
      </div>
    </>
  )
}

export default ItemList