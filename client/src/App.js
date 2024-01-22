import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Restaurants from './Components/Restaurants';
import Pizzas from './Components/Pizzas';
import Header from './Components/Header';
import './App.css';

function App() {
	let [restaurants, setRestaurants] = useState([])
	let [pizzas, setPizzas] = useState([])

	useEffect(() => {
		fetch('http://127.0.0.1:5500/restaurants')
		.then(res => res.json())
		.then(data => setRestaurants(data))
	}, [])

	useEffect(() => {
		fetch('http://127.0.0.1:5500/pizzas')
		.then(res => res.json())
		.then(data => setPizzas(data))
	}, [])

  	return (
		<div className="App">
			<Header></Header>
			<div>
				<img src="https://www.sargento.com/assets/Uploads/Recipe/Image/TuscanChikPizza_010.jpg" alt="NA"></img>
			</div>
			<Routes>
				<Route path='/pizzas' exact element={<Pizzas pizzas={pizzas}></Pizzas>} />					
				<Route path='/restaurants' exact element={<Restaurants restaurants = {restaurants} setRestaurants = {setRestaurants}></Restaurants>}/>				
			</Routes>
		</div>
  	);
}

export default App;
