import React from 'react'

const Items = ({product}) => {
  //console.log (product,"log item")

  const {img,name,id} = product

  return (
    <div className='itemCard'>
      <img src={img} alt={name} />
      <div id={id}>
        <p>{name}</p>
      </div>
        <button>ver más</button>
    </div>
  )
}

export default Items