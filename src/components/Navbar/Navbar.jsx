import React from 'react'
import FilterVintageTwoToneIcon from '@mui/icons-material/FilterVintageTwoTone';
import './Navbar.css';
import { CartWidget } from './CartWidget/CartWidget';
import { Link } from 'react-router-dom';

export const Navbar = () => {

  return (
    <>
        <div className='HeaderHome'>
            
            <div className='LogoHome'>
                <Link to="/"><FilterVintageTwoToneIcon/> </Link>
            </div>
            <Link to="/"> <h1>Sileno Growshop</h1> </Link>
            <ul>
                <Link to="/">Inicio</Link>
                <Link to="/categoria/Plantas">Plantas</Link>
                <Link to="/categoria/Seeds">Seeds</Link>
                <Link to="/categoria/Indoor">Indoor</Link>
                <Link to="/categoria/StonerStuff">Stoner Stuff</Link>
                <Link to="/cart"><CartWidget/></Link>
            </ul>
            
            
    </div>
    </>
  )
}
