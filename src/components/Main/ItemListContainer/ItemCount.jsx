import React from 'react'
import { useState } from 'react'


export const ItemCount = ({inicial, stock, onAdd}) => {

  //console.log(stock + " estado inicial")

  const [contador, setContador] = useState(inicial) ;

  //console.log(contador, "contador bo")
    
 const HandlerMinus = () => {
    if( contador > 1)  {
      setContador( contador - 1)
     
      }
       else {
        console.log("error")
      }
  }
  const HandlerAdd = () => {
    if( contador < stock )  {
      setContador( contador + 1)
      
      } 
      else {
        console.log("error")
      }
 }

 const agregarCantidad = () => {
   onAdd(contador);  
}



  return (
    <div>
        <div className='itemCardCount'>            
            <div>
            <button onClick={HandlerMinus}>-</button><span>{contador}</span><button onClick={HandlerAdd}>+</button>
            </div>
            <button id='addButton' disabled= {stock <= 0} onClick={agregarCantidad}>Agregar</button>            
        </div>
    </div>
  )
}
