import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detalle from './cards/Detalle';
import PokemonList from './pokemonList/PokemonList';
import Nav from './pokemonsearch/Nav';

function App() {


return (
<BrowserRouter> 
<Nav></Nav>
<Routes>

<Route exact path='/' element = {<PokemonList/>} />
<Route exact path='/:id' element = {<Detalle/>}/> 
</Routes>
</BrowserRouter>
)
    
} 

export default App;
