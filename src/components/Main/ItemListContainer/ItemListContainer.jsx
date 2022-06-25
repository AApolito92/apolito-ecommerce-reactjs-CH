import React from 'react'
import { ItemCount } from './ItemCount'
import './ItemListContainer.css'

function ItemListContainer(greeting) {
  return (
    <div>
        <h2>Bienvenidos a {greeting.name}</h2>
        <div className='productContainer'>
          <ItemCount Producto={"Sileno Seeds"} inicial={1} stock={5} total={0} />
          {/* <ItemCount Producto={"Sileno Shirts"} inicial={1} stock={10} total={0} />
          <ItemCount Producto={"Indoor Time"} inicial={1} stock={5} total={0} />
          <ItemCount Producto={"wat seeds"} inicial={1} stock={7} total={0} />  */}
        </div>
    </div>
  )
}

export default ItemListContainer