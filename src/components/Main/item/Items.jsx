import React from 'react'
import { Link } from 'react-router-dom'


const Items = ({product}) => {
  



//console.log(product,"producto")


  const {img,name,id} = product

  return (
    <div className='itemCard'>
      <img src={img} alt={name} />
      <div id={id}>
        <p>{name}</p>
      </div>
        <Link to={`/detail/${id}`}> <button> ver más</button></Link>
    </div>
  )
}

export default Items