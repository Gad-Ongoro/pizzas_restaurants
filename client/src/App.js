import { Routes, Route } from 'react-router-dom';
import Restaurants from './Components/Restaurants';
import Pizzas from './Components/Pizzas';
import './App.css';

function App() {
  	return (
		<div className="App">
			<header className="App-header">Welcome</header>
			<Routes>
				<Route path='pizzas' element={<Pizzas></Pizzas>} />					
				<Route path='restaurants' element={<Restaurants></Restaurants>}/>
				
			</Routes>
		</div>
  	);
}

export default App;
