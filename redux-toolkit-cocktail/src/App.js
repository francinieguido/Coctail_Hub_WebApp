import { Home } from './pages';
import { SingleCocktail } from './pages/SingleCocktail';
import { Navbar } from './components/Navbar';
import {Route, Routes} from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
       <Route path="/" element={<Home/>} />
       <Route path="/cocktail/:id" element={<SingleCocktail/>} />
      </Routes> 
    </div>
  );
}

export default App;
