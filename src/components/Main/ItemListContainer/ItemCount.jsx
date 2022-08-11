import React from 'react'
import { useState } from 'react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

export const ItemCount = ({inicial, stock, onAdd}) => {

  //console.log(stock + " estado inicial")

  const [contador, setContador] = useState(inicial) ;

  //console.log(contador, "contador bo")
    
 const HandlerMinus = () => {
    if( contador > 1)  {
      setContador( contador - 1)
     
      }
       
  }
  const HandlerAdd = () => {
    if( contador < stock )  {
      setContador( contador + 1)
      
      } 
      else {
        MySwal.fire({
          icon: 'error',
          width:300,
          heightAuto:200,
          title: 'perdon!',
          text: 'Nos quedamos sin stock',
          
        })
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
