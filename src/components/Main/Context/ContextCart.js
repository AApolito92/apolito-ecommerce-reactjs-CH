import React,{createContext, useState,useEffect} from 'react'



export const contextoCarrito = createContext([]);
const {Provider} = contextoCarrito;

const CustomProvider = ({children}) => {

    const [cartProductList, setProductList] = useState([]);
    const [qtyProduct, setQtyProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        getQtyProd();    
    }, [cartProductList])

    const addItem = (item,qty) => {
        if (isInCart(item.id)){
            const found = cartProductList.find(el => el.id === item.id);
            const index = cartProductList.indexOf(found);
            const aux = [...cartProductList];
            aux[index].qty += qty;
            setProductList(aux);
            console.log(cartProductList,"producto duplicado")
        }else {
            setProductList([...cartProductList, item])
            console.log(cartProductList,"producto agregado")
        }
    }
    const deleteItem = (id) => {
        setProductList(cartProductList.filter(product => product.id !== id));        
    }
    const isInCart = (id) => {
        const found = cartProductList.find(product => product.id === id) ;
        return found ? true : false ; 
        //return products.some(products => products.id === id);
    }
    const getQtyProd = () => {
        let qty = 0 ;
        let precio = 0;
        cartProductList.forEach(product => qty += product.qty);        
        setQtyProducts(qty);
        cartProductList.forEach(product => precio += product.precio); 
        setTotalPrice(precio);
    }
    const cleanCart = () => {
        setProductList([]);
        setQtyProducts(0) 
    }
  
 

  return (
    <Provider value={{cartProductList,addItem,deleteItem,getQtyProd,cleanCart}}>
    {children}
    </Provider>
  )
}

export default CustomProvider