import './App.css';
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/Main/ItemListContainer/ItemListContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <Header/>
        
      <ItemListContainer greeting = "Sileno GrowShop"/>
       
       

        
      
    </div>
  );
}

export default App;
