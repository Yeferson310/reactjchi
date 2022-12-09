import logo from './logo.svg';
import './App.css';
import cards from './cards/cards';
import { pokemon } from './database/db';

function App() {
  return (
    <div> {pokemon.map((item)=>(
      <cards id = {item.id} img = {item.img} name = {item.name}/>
    ))} </div>
  );
}

export default App;
