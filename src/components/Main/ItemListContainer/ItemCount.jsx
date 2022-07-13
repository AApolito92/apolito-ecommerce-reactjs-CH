import React from 'react'
import { useState } from 'react'

<<<<<<< HEAD
export const ItemCount = ({Producto,inicial, stock, total}) => {
=======
export const ItemCount = ({inicial, stock, onAdd}) => {
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6

  //console.log(stock + " estado inicial")

<<<<<<< HEAD
  const [contador, setContador] = useState(inicial) 
    
 const HandlerMinus = () => {
    if( (contador > 1) && (contador < stock))  {
      setContador( contador -1)
=======
  const [contador, setContador] = useState(inicial) ;

  //console.log(contador, "contador bo")
    
 const HandlerMinus = () => {
    if( contador > 1)  {
      setContador( contador - 1)
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6
     
      }
       else {
        console.log("error")
      }
  }
  const HandlerAdd = () => {
<<<<<<< HEAD
    if( (contador >= 1) && (contador < stock))  {
      setContador( contador +1)
=======
    if( contador < stock)  {
      setContador( contador + 1)
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6
      
      } 
      else {
        console.log("error")
      }
 }

<<<<<<< HEAD
 const onAdd = () => {
  if (contador > stock) {
    alert("no hay stock")
  } else{
  stock -= contador
  console.log(stock + " stock despues de la compra")
  total +=contador;
  console.log(total +" comprado");
  setContador(1);
=======
 const agregarCantidad = () => {
   onAdd(contador);  
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6
}



  return (
    <div>
<<<<<<< HEAD
        <div className='itemCard'>
            <p>{Producto}</p>
=======
        <div className='itemCardCount'>            
>>>>>>> ab34a7aa13bc008eadb122c630fdaade80695ad6
            <div>
            <button onClick={HandlerMinus}>-</button><span>{contador}</span><button onClick={HandlerAdd}>+</button>
            </div>
            <button disabled= {stock <= 0} onClick={agregarCantidad}>Agregar</button>
            
        </div>
    </div>
  )
}
