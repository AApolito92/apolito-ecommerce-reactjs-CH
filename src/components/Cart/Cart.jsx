import React,{useContext} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'


function Cart() {

  const {cartProductList} = useContext(contextoCarrito);
  console.log (cartProductList);
 
  return (
    <div>Insert carrito here</div>
  )
}

export default Cart