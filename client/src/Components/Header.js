import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import DropDownMenu from './DropDownMenu';

export default function Header() {
    let [hamburger_menu, setHamburgerMenu_state] = useState(false)

    function handleclick_humburger_img(){
        setHamburgerMenu_state(current => !current)
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
                <h3 className='drop_down'>
                    {hamburger_menu && <DropDownMenu></DropDownMenu>}
                </h3>
            </header>        
        </>
    )
}