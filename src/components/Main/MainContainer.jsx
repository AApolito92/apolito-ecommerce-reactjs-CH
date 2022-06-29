import React from 'react'
import {ItemListContainer} from './ItemListContainer/ItemListContainer'
import './MainContainer.css'

export default function MainContainer() {
  return (
    <div className='MainContainer'>
        <ItemListContainer greeting = "Sileno GrowShop"/>
    </div>
  )
}
