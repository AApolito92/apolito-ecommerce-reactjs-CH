import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getDataProd } from '../../../../mocks/fakeApi'
import ItemDetail from './ItemDetail'


function Itemdetailcontainer() {

    const [itemDetail, setItemDetail] = useState ([])
    const [mostrar, setMostrar] = useState(true) 
    
    const {id} = useParams()

    useEffect (()=> {
      
      getDataProd (id)
        .then((res) =>{setItemDetail(res)}   ,
        console.log(itemDetail,"bo")             
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
