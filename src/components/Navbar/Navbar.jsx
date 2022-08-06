import React, { useState,useEffect } from 'react'
import './Navbar.css';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { db,app } from '../../firebase/firebase';
import {getDocs, collection} from "firebase/firestore"
import { getAuth,onAuthStateChanged,signOut } from 'firebase/auth';
const auth = getAuth(app);



export const Navbar = () => {

  const [logUser,setLogUser]= useState(null)
  console.log(logUser)
  onAuthStateChanged(auth,(userFirebase)=> {
    if(userFirebase){
      setLogUser(userFirebase);
      console.log(userFirebase,"log user");
      console.log(auth,"log auth solo");
    }else {
      setLogUser(null);
    }
  })


  const [navList, setNavList] =useState([]);

  useEffect (()=> {
    const listCollection = collection(db,"categories");
    getDocs(listCollection)
    .then (res => {      
      const listProd = res.docs.map(docData => {
        return {
          id: docData.id,
            ...docData.data()          
        }        
      })      
      setNavList(listProd);     
    })    
  },[])

  return (
    <>
        <div className='HeaderHome'>
          
            <Link to="/" className='nameTitle'> <h1>Sileno Growshop</h1> </Link>
            <ul>
               <li> <Link to="/">Inicio</Link></li>
               <li><p>Productos</p>
                <ul>
                {navList.map((navItem)=> <li key= {navItem.id}>  <Link   to={`/categoria/${navItem.categoria}`}>{navItem.categoria}</Link></li>)}
                </ul>
               </li>

               {logUser? <li>Bienvenido usuario <button onClick={()=> signOut(auth)} > deslogear </button></li>: <li><Link to="/login">Log In</Link></li> }
                <li><Link to="/cart"><CartWidget/></Link></li>            
                      
            </ul>
            
            
    </div>
    </>
  )
}
