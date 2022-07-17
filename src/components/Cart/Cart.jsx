import React,{useContext} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'


function Cart() {
  //crear itemcart donde recibne un producto que renderiza.
  // crear un map de productlist del cartcontext aca. con la funcion para eliminar.
  
  const {cartProductList} = useContext(contextoCarrito);
  console.log (cartProductList);
 
  return (
    <div>Insert carrito here</div>
  )
}

export default Cart