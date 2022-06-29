import React from 'react'
import { useState } from 'react'

export const ItemCount = ({producto,inicial, stock, total}) => {

  console.log(stock + " estado inicial")

  const [contador, setContador] = useState(inicial) ;
    
 const HandlerMinus = () => {
    if( (contador > 1) && (contador < stock))  {
      setContador( contador - 1)
     
      }
       else {
        console.log("error")
      }
  }
  const HandlerAdd = () => {
    if( (contador >= 1) && (contador < stock))  {
      setContador( contador + 1)
      
      } 
      else {
        console.log("error")
      }
 }

 const onAdd = () => {
  if (contador > stock) {
    alert("no hay stock")
  } else{
  stock -= contador
  console.log(stock + " stock despues de la compra")
  total +=contador;
  console.log(total +" comprado");
  setContador(inicial);
}

 }


  return (
    <div>
        <div className='itemCard'>
            <p>{producto}</p>
            <div>
            <button onClick={HandlerMinus}>-</button><span>{contador}</span><button onClick={HandlerAdd}>+</button>
            </div>
            <button onClick={onAdd}>Agregar</button>
            
        </div>
    </div>
  )
}
