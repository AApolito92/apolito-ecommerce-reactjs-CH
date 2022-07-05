import './App.css';
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import { Navbar } from './components/Navbar/Navbar';
import Itemdetailcontainer from './components/Main/ItemListContainer/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

function App() {




  return (
    <div className="App">
        
      <BrowserRouter>        
        <Navbar/>
          <Routes>
            <Route path='/' element = {<ItemListContainer greeting = "Sileno GrowShop"/>}/>
            <Route path='/categoria/:categoriaId' element = {<ItemListContainer  greeting = "Sileno GrowShop"/>}/>
            <Route path='/detail/:Id' element = {<Itemdetailcontainer/>}/>
            <Route path='/cart' element = {<Cart/>}/>            
          </Routes>
      </BrowserRouter>
       

        
      
    </div>
  );
}

export default App;
