import React,{createContext, useState,useEffect} from 'react'



export const contextoCarrito = createContext([]);
const {Provider} = contextoCarrito;

const CustomProvider = ({children}) => {

    const [cartProductList, setProductList] = useState([]);
    const [qtyProduct, setQtyProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        getQtyProd();    
        console.log(totalPrice)
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

        //agregar logica similar a add item para poder eliminar unidades de items y no item completo 

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