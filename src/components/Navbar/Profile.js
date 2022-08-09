import React,{ useContext,useState,useEffect } from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import { db,app } from '../../firebase/firebase'
import { collection,getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'


const auth = getAuth(app);


export const Profile = () => {


 
const {userLog} = useContext(contextoCarrito)
console.log(userLog,"log profile")
const usuarioBO = userLog[0];
const [buys,setBuys] = useState([])


useEffect (()=> {
  const  getBuys = async ()=>{
    let filtrado =[];    
    const querySnapshot =await getDocs(collection(db,'buyerOrders'))
    const docs = []
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(),id:doc.id})
        })
        filtrado = docs.filter(el => el.email === auth.currentUser.email)               
        
        console.log(filtrado,"array filtrado compras")
  
        setBuys(filtrado);
  }
 
  getBuys();
},[])


console.log(buys,"log items arrays");

  return (
    <div>

      <h3>Datos personales</h3>
      {usuarioBO !== undefined?
        <>                
        <div>
        <p>{usuarioBO.nombre} </p>
        <p>{usuarioBO.email} </p>
        <p>{usuarioBO.direccion} </p>
        <p>{`fecha de registro: ${usuarioBO.registro}`}</p>
        </div>
        
        <div>
          <h3>Compras</h3>
            
        {buys.map(product => 
            <>      
          <h4 key={product.id}> {`Id de compra: ${product.id} `}</h4>          
          <ul> {product.items.map(tst => <li key={tst.id}>   {`${tst.name} x ${tst.cantidad}`} </li> )}</ul>
          <p>{`total de la compra: $${product.total}`} </p>
          
          </>
          )}
          
        </div>
        </>
        :
        <>      
        <p>Relogear para cargar los datos por favor</p>
        
        </>
        }
        
    </div>
  )
}
