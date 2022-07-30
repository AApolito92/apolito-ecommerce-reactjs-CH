import React,{createContext, useState,useEffect} from 'react'



export const contextoCarrito = createContext([]);
const {Provider} = contextoCarrito;





const CustomProvider = ({children}) => {

    const [cartProductList, setProductList] = useState([]);
    const [qtyProduct, setQtyProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        getQtyProd();    
        console.log("render")
        //eslint-disable-next-line react-hooks/exhaustive-deps
    },[cartProductList])

    const addItem = (item,qty) => {
        if (isInCart(item.id)){
            const found = cartProductList.find(el => el.id === item.id);
            const index = cartProductList.indexOf(found);
            const aux = [...cartProductList];
            aux[index].qty += qty;
            setProductList(aux);           
        }else {
            setProductList([...cartProductList, item])            
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
        cartProductList.forEach(product => precio += (product.precio*product.qty)); 
        setTotalPrice(precio);
    }
    const cleanCart = () => {
        setProductList([]);
        setQtyProducts(0) 
    }
  
 

  return (
    <Provider value={{cartProductList,setProductList,addItem,deleteItem,getQtyProd,cleanCart,totalPrice,qtyProduct}}>
    {children}
    </Provider>
  )
}

export default CustomProvider