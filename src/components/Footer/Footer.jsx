import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer>
        <Link to="/" className='nameTitle'> <h2>Sileno Growshop</h2> </Link>
    </footer>
  )
}
