import React, {useContext} from 'react'
import { contextoCarrito } from '../../Main/Context/ContextCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


export const CartWidget = () => {

  const {qtyProduct,cartProductList} = useContext(contextoCarrito);
  return ( 
            <div>
           { cartProductList.length === 0 ?   
                <ShoppingCartIcon fontSize="medium"/>  
                :
                <>
                <ShoppingCartIcon fontSize="medium"/>     
                <p>{qtyProduct} </p> </> }
                
           </div>
  )
}
