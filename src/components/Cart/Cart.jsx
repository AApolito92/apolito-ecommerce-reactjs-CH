import React,{useContext,useState} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase/firebase';




const auth = getAuth(app);

function Cart() {



  const {cartProductList, totalPrice,deleteItem,setProductList,addItem,subtractItem,userLog} = useContext(contextoCarrito);
  console.log(auth.currentUser,"usuario logeadito en cart")
  console.log(userLog,"usuario logeadito context")

  
  const newUser = {...userLog[0],total:totalPrice,items:cartProductList.map(product=> ({id:product.id, name: product.name, precio: product.precio, cantidad:product.qty})),}
  const [ idCompra, setIdCompra] = useState("");


  console.log(newUser,"newuser")


  const finalizarCompra = async(e) => {


    e.preventDefault();    
    const base = getFirestore();
    const orderColl = collection(base,"buyerOrders");
    newUser.estado="generada";
    addDoc(orderColl,newUser)
    .then((res)=>     
    setIdCompra(res.id))    

    setProductList([]);
   

  }

console.log(idCompra,"wot");

  return (
    
    <>
    {cartProductList.length === 0? 

    <div className='mainBody'>
    <p>No hay productos en el carrito pasa por <Link to="/"> ACA </Link></p>
    </div>
    :
    <>
     {cartProductList.map((product) => <ItemCart key={product.id} producto={product} deleteItem={deleteItem} addItem={addItem} subtractItem={subtractItem}  />)}
     
     <p>{`Total compra: $${totalPrice}`} </p>

      <div>

        { auth.currentUser?
         <button onClick={finalizarCompra}> {`Finalizar compra como ${auth.currentUser.email}`}</button>
         :
         <Link to="/login"> <button>Ingresar con tu usuario para finalizar la compra</button>  </Link>
         }

            

                 
      </div>


     </>
     }

    
          <>      
          <h4 > {`Id de compra: ${idCompra} `}</h4>  
          </>
    
    </>
  )
}

export default Cart