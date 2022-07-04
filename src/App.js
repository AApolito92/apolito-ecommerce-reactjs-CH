import './App.css';
import { Header } from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
        
        <Header/>
        
       
       <MainContainer/>
       

        
      
    </div>
  );
}

export default App;
