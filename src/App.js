import './App.css';
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import Itemdetailcontainer from './components/Main/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import CustomProvider from './components/Main/Context/ContextCart';



function App() {
  return (
  
    
      <BrowserRouter> 
       <CustomProvider>        
        <Navbar/>        
          <Routes>
            <Route path='/' element = {<ItemListContainer greeting = "Sileno GrowShop"/>}/>
            <Route path='/categoria/:categoriaId' element = {<ItemListContainer  greeting = "Sileno GrowShop"/>}/>
            <Route path='/detail/:id' element = {<Itemdetailcontainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>            
          </Routes> 
       </CustomProvider>         
      </BrowserRouter>  
              
   
  );
}

export default App;
