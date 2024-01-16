import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
    let [hamburger_menu, setHamburgerMenu_state] = useState(false)

    function handleclick_humburger_img(){
        setHamburgerMenu_state(current => !current)
        console.log(hamburger_menu);
    }
    return (
        <>        
            <header className='App-header'>
                <img 
                className='hamburger_img' 
                src={hamburger_menu ? 'https://cdn-icons-png.flaticon.com/128/13403/13403265.png' : "https://cdn-icons-png.flaticon.com/128/8777/8777579.png"} 
                onClick={handleclick_humburger_img} 
                alt="NA">                    
                </img>
                <h1>
                    <NavLink className='navlink' to='/pizzas' exact>Pizzas</NavLink> &  
                    <NavLink className='navlink' to='/restaurants' exact>Restaurants</NavLink>
                </h1>
            </header>        
        </>
    )
}