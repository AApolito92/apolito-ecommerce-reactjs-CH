import React,{useContext} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase/firebase';
import "./cart.css"
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)



const auth = getAuth(app);

function Cart() {



  const {cartProductList, totalPrice,deleteItem,setProductList,addItem,subtractItem,userLog} = useContext(contextoCarrito);

  
  const newUser = {...userLog[0],total:totalPrice,items:cartProductList.map(product=> ({id:product.id, name: product.name, precio: product.precio, cantidad:product.qty})),}
  




  const finalizarCompra = async(e) => {


    e.preventDefault();    
    const base = getFirestore();
    const orderColl = collection(base,"buyerOrders");
    newUser.estado="generada";
   await addDoc(orderColl,newUser)
    .then((res)=> {    
    
    MySwal.fire({
      icon: "success",
      title: <p>Compraste bro</p>,
      text: `A tu compra se le asigno el id: ${res.id}, en tu perfil vas a poder chequear que compraste y cuanto te dolio`,  
  })}
)  
    setProductList([]);
   

  }


  return (
    
    <>
    {cartProductList.length === 0? 

    <div className='mainBody'>
    <p className='textNoItems'>No hay productos en el carrito pasa por <Link to="/"> ACA </Link></p>
    </div>
    :
    <div className='mainBody'>
     {cartProductList.map((product) => <ItemCart key={product.id} producto={product} deleteItem={deleteItem} addItem={addItem} subtractItem={subtractItem}   />)}
     
     <h6>{`Total compra: $${totalPrice}`} </h6>

      <div>

        { newUser.email?
         <button onClick={finalizarCompra}> {`Finalizar compra como ${auth.currentUser.email}`}</button>
         :
         <Link to="/login"> <button>Ingresar con tu usuario para finalizar la compra</button>  </Link>
         }

            

                 
      </div>


      </div>
     }    
    </>
  )
}

export default Cart