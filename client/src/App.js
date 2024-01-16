import { Routes, Route } from 'react-router-dom';
import Restaurants from './Components/Restaurants';
import Pizzas from './Components/Pizzas';
import Header from './Components/Header';
import './App.css';

function App() {
  	return (
		<div className="App">
			<Header></Header>
			<div>
				<img src="https://www.sargento.com/assets/Uploads/Recipe/Image/TuscanChikPizza_010.jpg" alt="NA"></img>
			</div>
			<Routes>
				<Route path='/pizzas' exact element={<Pizzas></Pizzas>} />					
				<Route path='/restaurants' exact element={<Restaurants></Restaurants>}/>				
			</Routes>
		</div>
  	);
}

export default App;
