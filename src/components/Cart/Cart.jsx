import React,{useContext, useState} from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import ItemCart from './ItemCart';
import { Link } from 'react-router-dom';
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { app } from '../../firebase/firebase';



const auth = getAuth(app);
function Cart() {

  
  const {cartProductList, totalPrice,deleteItem,setProductList,addItem,subtractItem,userLog,setUserLog} = useContext(contextoCarrito);
  console.log(auth.currentUser,"usuario logeadito en cart")
  console.log(userLog,"usuario logeadito context")

  // const initialUser = {
  //   name: "",
  //   mail: "",
  //   address:"",
  //   items: cartProductList.map(product=> ({id:product.id, name: product.name, precio: product.precio, cantidad:product.qty})),
  //   date:serverTimestamp(),    
  //   total: totalPrice,
  //   state:"generado"
  // }


/// new user y el capture data probablemente se borren 
  const newUser = {...userLog,total:totalPrice,items:cartProductList.map(product=> ({id:product.id, name: product.name, precio: product.precio, cantidad:product.qty})),}

  console.log(newUser,"newuser")

  const [user, setUser] = useState(userLog);
  console.log(userLog,"context user")
  
  const captureData = (e) => {
    const {name , value} = e.target ;
    setUser({...user,[name]:value})
    //console.log(user);
  }

  const saveData = async(e) => {
    e.preventDefault();    
    const base = getFirestore();
    const orderColl = collection(base,"buyerOrders");
    addDoc(orderColl,user)
    .then(({id})=> 
    
    console.log(id,"id compra"));   

    setProductList([]);
    setUser([]);

  }

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
        <form onSubmit={saveData}>
          <input type="text" name ="name" placeholder='Nombre Completo' onChange={captureData} value={userLog.name} required />
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