import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Detalle from './cards/Detalle';

function App() {


return (
<BrowserRouter> 
<Routes>

<Route exact path='/' />
<Route exact path='/:id' element = {<Detalle/>}/> 
</Routes>
</BrowserRouter>
)
    
} 

export default App;
