import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetail from './ItemDetail'
import { db } from '../../../../firebase/firebase'
import {doc, getDoc, collection} from "firebase/firestore"
import { FadeLoader } from 'react-spinners'

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
    

       { mostrar ? <FadeLoader className='loaderItemlist' color="#e9dfdf" loading/> : <ItemDetail itemDetail= {itemDetail}/> }   


    </div>
  )
}

export default Itemdetailcontainer
