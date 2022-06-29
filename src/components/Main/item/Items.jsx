import React from 'react'

const Items = ({product}) => {

  const {img,name,detail} = product

  return (
    <div className='itemCard'>
      <img src={img} alt={name} />
      <div>
        <p>{name}</p>
        <p>{detail}</p>
      </div>
        <button>ver más</button>
    </div>
  )
}

export default Items