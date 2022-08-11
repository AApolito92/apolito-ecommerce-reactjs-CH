import React,{ useContext,useState,useEffect } from 'react'
import { contextoCarrito } from '../Main/Context/ContextCart'
import { db,app } from '../../firebase/firebase'
import { collection,getDocs } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import "./profile.css"

const auth = getAuth(app);


export const Profile = () => {


 
const {userLog} = useContext(contextoCarrito)
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
        
  
        setBuys(filtrado);
  }
 
  getBuys();
},[])



  return (
    <div className='profileHolder'>

      {usuarioBO !== undefined?
        <>                
        <div className='personalData'>
          <h4>Datos personales</h4>
          <p>{`Nombre: ${usuarioBO.nombre}`} </p>
          <p>{`Correo electronico: ${usuarioBO.email}`} </p>
          <p>{`Dirección: ${usuarioBO.direccion}`} </p>
          <p>{`Fecha de registro: ${usuarioBO.registro}`}</p>
        </div>
        
        <div className='buyData'>
          <h3>Compras</h3>
            
        {buys.map(product => 
          <div key={product.id}>      
          <h4 > {`Id de compra: ${product.id} `}</h4>          
          <ul> {product.items.map((tst,index) => 
          <li key={index}>   { `${tst.name} x ${tst.cantidad}`} </li> )}</ul>
          <p>{`Total de la compra: $${product.total}`} </p>
          
          </div>
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
