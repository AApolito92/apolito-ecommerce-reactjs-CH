import React, { useState,useEffect } from 'react'
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import './Navbar.css';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { db } from '../../firebase/firebase';
import {getDocs, collection} from "firebase/firestore"




export const Navbar = () => {

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
      //const unique = [...new Set(listProd.map(item => item.categoria))];
      setNavList(listProd);     
    })    
  },[])



  return (
    <>
        <div className='HeaderHome'>
            
            <div className='LogoHome'>
                <Link to="/"><FilterVintageTwoToneIcon/> </Link>
            </div>
            <Link to="/"> <h1>Sileno Growshop</h1> </Link>
            <ul>
                <Link to="/">Inicio</Link>
                {navList.map((navItem)=> <Link  key= {navItem.id} to={`/categoria/${navItem.categoria}`}>{navItem.categoria}</Link>)}
                <Link to="/cart"><CartWidget/></Link>

               

            </ul>
            
            
    </div>
    </>
  )
}
