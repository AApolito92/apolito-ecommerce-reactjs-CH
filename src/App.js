import './App.css';
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import Itemdetailcontainer from './components/Main/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import { Profile } from './components/Navbar/Profile';
import { LogIn } from './components/Navbar/LogIn';
import { Footer } from './components/Footer/Footer';
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
            <Route path='/login' element = {<LogIn/>}/>
            <Route path='/profile' element = {<Profile/>}/>          
          </Routes> 
          <Footer/>
       </CustomProvider>         
      </BrowserRouter>  
              
   
  );
}

export default App;
