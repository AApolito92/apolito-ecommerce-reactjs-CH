import React,{createContext,useState} from 'react'


export const cartContext = createContext();

const {Provider} = cartContext;

const CartCustomProvider = ({Children}) => {

    const [product, setProduct] = useState([]);
    const [qtyProduct, setQtyProducts] = useState(0);

    useEffect(() => {
        getQtyProd();    
    }, [product])
    
 
    const addItem = (item) => {
        if (isInCart(item.id)){

            const found = product.find(el => el.id === item.id);
            const index = product.indexOf(found);
            const aux = [...product];
            aux[index].qty += product.qty;
            setProduct(aux);

        }else {
            setProduct([...product, item])
        }
    }

    const deleteItem = (id) => {
        setProduct(product.filter(product => product.id !== id));
        
    }


    const isInCart = (id) => {

        const found = products.find(product => product.id === id) ;
        return found ? true : false ; 

        //return products.some(products => products.id === id);

    }

    const getQtyProd = () => {
        let qty = 0 ;
        products.forEach(product => qty += product.qty);        
        setQtyProducts(qty)
    }

    const cleanCart = () => {
        setProduct([]);
        setQtyProducts(qty) 
       }

  return (
    <Provider>
    
    </Provider>   
  )
}

export default CartCustomProvider 


