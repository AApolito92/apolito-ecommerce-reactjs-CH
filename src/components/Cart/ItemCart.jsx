import React,{useState} from 'react'

function ItemCart({producto, deleteItem,addItem,subtractItem  }) {

    console.log(producto,"item cart");

    const {name,qty,precio,id,stock} = producto ;

    const [contador, setContador] = useState(qty) ;

    const  HandlerDelete = () => {
        deleteItem(id)
    }

const HandlerQty = (value) => {

  if(value === "+" && contador < stock){
    addItem(producto,1)
    setContador(contador+1)

  }else if (value === "-" && contador > 1) {
    subtractItem (producto,1)
    setContador(contador -1)
  }
}

    

  return (
    <div>
        <p>{name} x {qty}</p>
        <p>total: ${(qty*precio)}</p>
        <button onClick={() => HandlerQty("-")}>-</button><span>{contador}</span><button onClick={() => HandlerQty("+")}>+</button>
        <button onClick={HandlerDelete}>Eliminar item</button>        
    </div>
  )
}

export default ItemCart