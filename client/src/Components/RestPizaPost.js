import React from 'react';

export default function RestPizaPost() {
	function handleSubmit(e){
		e.preventDefault();
		e.target.reset();
	}
	return (
		<div>
			<h2 className=''>Add New Restaurant_Pizza</h2>
			<form onSubmit={handleSubmit}>
				<input type='number' name='price' placeholder='Price...'></input>
				<input type='number' name='pizza_id' placeholder='Pizza ID...'></input>
				<input type="number" name="restaurant_id" placeholder='Restaurant ID'></input>
				<input type='submit'></input>
			</form>
		</div>
	)
}
