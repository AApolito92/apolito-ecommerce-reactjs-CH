import React,{useState} from 'react'
import DeleteIcon from '@mui/icons-material/Delete';




function ItemCart({producto, deleteItem,addItem,subtractItem  }) {

    //console.log(producto,"item cart");

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
    <div className='cartItem'>
        <p>{`${name} x ${qty} - $${(qty*precio)}`}</p>
        <div className='buttonsCart'>
        <button onClick={() => HandlerQty("-")}>-</button><span>{contador}</span><button onClick={() => HandlerQty("+")}>+</button>
        <button onClick={HandlerDelete}><DeleteIcon fontSize='small' color='action'/></button>  
          
        </div>   
    </div>
  )
}

export default ItemCart