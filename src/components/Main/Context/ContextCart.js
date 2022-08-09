import React,{createContext, useState,useEffect} from 'react'


//buscar en firestore con onauthchange

export const contextoCarrito = createContext([]);
const {Provider} = contextoCarrito;





const CustomProvider = ({children}) => {

   // console.log(auth.currentUser,"log user auth context")

    const [cartProductList, setProductList] = useState([]);
    const [qtyProduct, setQtyProducts] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [userLog,setLogUser]= useState([]);

    
console.log(userLog,"log user context");


    useEffect(() => {
        getQtyProd();    
        //console.log("render")
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

    const subtractItem = (item,qty) => {      
        const found = cartProductList.find(el => el.id === item.id);
        const index = cartProductList.indexOf(found);
        const aux = [...cartProductList];
        aux[index].qty -= qty;
        setProductList(aux);         
    }

    const deleteItem = (id) => {       
        setProductList(cartProductList.filter(product => product.id !== id));        
    }
    const isInCart = (id) => {
        const found = cartProductList.find(product => product.id === id) ;
        return found ? true : false ;        
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
    <Provider value={{cartProductList,setProductList,addItem,deleteItem,getQtyProd,cleanCart,totalPrice,subtractItem,qtyProduct,setLogUser,userLog}}>
    {children}
    </Provider>
  )
}

export default CustomProvider