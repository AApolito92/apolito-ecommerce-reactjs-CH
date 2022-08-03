import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../../../../firebase/firebase'
import {doc, getDoc, collection} from "firebase/firestore"


function Itemdetailcontainer() {

    const [itemDetail, setItemDetail] = useState ([])
    const [mostrar, setMostrar] = useState(true) 
    
    const {id} = useParams()

    useEffect (()=> {
      
    const productListCollection = collection(db,"productCollection");
    const unitProduct = doc(productListCollection,id)
    getDoc(unitProduct).then (
      res => {
        setItemDetail({
          id: res.id,
          ...res.data()
        })
        
      }
    )
      .catch(err=> console.log(err))
      .finally(() => setMostrar(false))       
      },[id])      

  return (


    <div className='mainBody'>
    

       { mostrar ? <p>Loading detalle...</p> : <ItemDetail itemDetail= {itemDetail}/> }   


    </div>
  )
}

export default Itemdetailcontainer
