import React,{useContext, useState} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';



function Cart() {

  
  const {cartProductList, totalPrice,deleteItem,setProductList} = useContext(contextoCarrito);
  //console.log (cartProductList, "consola cart");
  //console.log(totalPrice,"precio total");

  const initialUser = {
    name: "",
    mail: "",
    address:"",
    items: cartProductList.map(product=> ({id:product.id, name: product.name, precio: product.precio, cantidad:product.qty})),
    date:serverTimestamp(),
    total: totalPrice
  }

  const [user, setUser] = useState(initialUser);
  
  const captureData = (e) => {
    const {name , value} = e.target ;
    setUser({...user,[name]:value})
    //console.log(user);
  }

  const saveData = async(e) => {
    e.preventDefault();
    console.log(user);
    const base = getFirestore();
    const orderColl = collection(base,"buyerOrders");
    addDoc(orderColl,user)
    .then(({id})=> console.log(id,"id compra"));
   

    setProductList([]);
    setUser(initialUser);

  }

  return (
    
    <>
    {cartProductList.length === 0? 
    <p>No hay productos en el carrito pasa por <Link to="/"> ACA </Link></p>
    :
    <>
     {cartProductList.map((product) => <ItemCart key={product.id} producto={product} deleteItem={deleteItem}/>)}
     
     <p>Total compra:{totalPrice} </p>

      <div>
        <form onSubmit={saveData}>
          <input type="text" name ="name" placeholder='Nombre Completo' onChange={captureData} value={user.name} required />
          <input type="email" name= "mail" placeholder='Correo electronico' onChange={captureData} value={user.mail} required/>
          <input type="text" name='address' placeholder='Dirección' onChange={captureData} value={user.address} required/>
          <button type='submit'> Finalizar compra!</button>
        </form>
      </div>
     </>
     }

    
    
    
    </>
  )
}

export default Cart