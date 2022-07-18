import React,{useContext,useEffect} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';


function Cart() {
  //crear itemcart donde recibe un producto que renderiza.
  // crear un map de productlist del cartcontext aca. con la funcion para eliminar.
  
  const {cartProductList, totalPrice,deleteItem} = useContext(contextoCarrito);
  console.log (cartProductList, "consola cart");


    console.log(totalPrice,"precio total")
           

 
  return (
    
    <>
    {cartProductList.length === 0? <p>No hay productos en el carrito pasa por <Link to="/"> ACA</Link></p> : cartProductList.map((product)=> <ItemCart key={product.id} producto={product} deleteItem={deleteItem}/>)}

    <p>Total compra:{totalPrice} </p>
    </>
  )
}

export default Cart