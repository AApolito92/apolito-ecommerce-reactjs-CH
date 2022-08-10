import React, {useContext} from 'react'
import { contextoCarrito } from '../../Main/Context/ContextCart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -9,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));


export const CartWidget = () => {

  const {qtyProduct} = useContext(contextoCarrito);

  return ( 
            <div id='cartWidget'>
              <IconButton aria-label="cart">
               <StyledBadge badgeContent={qtyProduct} color="secondary">
                <ShoppingCartIcon />
               </StyledBadge>
              </IconButton>
           </div>
  )
}
