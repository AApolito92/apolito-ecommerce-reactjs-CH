import React from 'react'
import { useState, useEffect } from 'react'
import { getData} from '../../../../mocks/fakeApi'
import ItemDetail from './ItemDetail'


function Itemdetailcontainer() {

    const [itemDetail, setItemDetail] = useState ([])
    const [mostrar, setMostrar] = useState(true) 
    

    useEffect (()=> {
      let filtrado =[] ;
        getData
        .then((res)=>{            
            filtrado = res.filter(el => el.name === "Sileno weed")         
            setItemDetail(filtrado)
        })        
        .catch((error)=> console.log(error))      
        .finally (() => setMostrar (false))        
      },[])



      
      console.log(itemDetail, "log filtrado")

      

  return (


    <div>
    

       { mostrar ? <p>Loading detalle...</p> : itemDetail.map((itemDet)=><ItemDetail key ={itemDet.id}itemDetail= {itemDet}/> )}   


    </div>
  )
}

export default Itemdetailcontainer
