import React from 'react'
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import './Navbar.css';
import { CartWidget } from './CartWidget/CartWidget';
export const Navbar = () => {
  return (
    <>
        <div className='HeaderHome'>
            
            <div className='LogoHome'>
                <FilterVintageTwoToneIcon/> 
            </div>
            <h1>Sileno Growshop</h1>
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li><a href="#"><CartWidget/></a></li>
            </ul>
            
            
    </div>
    </>
  )
}
