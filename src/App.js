import './App.css';
import { Header } from './components/Header/Header';
import MainContainer from './components/Main/MainContainer';

function App() {
  return (
    <div className="App">
        <header>
        <Header/>
        </header>
       <main>
       <MainContainer/>
       </main>

        
      
    </div>
  );
}

export default App;
