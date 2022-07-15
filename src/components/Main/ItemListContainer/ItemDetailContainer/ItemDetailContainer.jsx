import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataProd } from '../../../../mocks/fakeApi'
import ItemDetail from './ItemDetail'
import { db } from '../../../../firebase/firebase'
import {doc, getDoc, collection} from "firebase/firestore"


function Itemdetailcontainer() {

    const [itemDetail, setItemDetail] = useState ([])
    const [mostrar, setMostrar] = useState(true) 
    
    const {id} = useParams()

    useEffect (()=> {
      
      getDataProd (id)
        .then((res) =>{setItemDetail(res)}                    
        )        
        .catch((error)=> console.log(error))  
            
        .finally (() => setMostrar (false))        
      },[id])      

  return (


    <div>
    

       { mostrar ? <p>Loading detalle...</p> : <ItemDetail itemDetail= {itemDetail}/> }   


    </div>
  )
}

export default Itemdetailcontainer
