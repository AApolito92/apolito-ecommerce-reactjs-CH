import React from 'react'
import { Link } from 'react-router-dom'

const Items = ({product}) => {
  //console.log (product,"log item")

  const {img,name,id} = product

  return (
    <div className='itemCard'>
      <img src={img} alt={name} />
      <div id={id}>
        <p>{name}</p>
      </div>
        <Link to={`/detail/${id}`}>ver más</Link>
    </div>
  )
}

export default Items