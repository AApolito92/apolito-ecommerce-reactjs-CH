import React ,{useContext} from 'react'

function itemCart({producto, deleteItem }) {

    console.log(producto,"item cart");

    const {name,qty,precio,id} = producto ;

    const  HandlerDelete = () => {
        deleteItem(id)
    }

    

  return (
    <div>
        <p>{name}</p>
        <p>{qty}</p>
        <p>total: {(qty*precio)}</p>
        <button onClick={HandlerDelete}>Eliminar item</button>        
    </div>
  )
}

export default itemCart