import React from 'react'
import MenuItems from './MenuItems.js'
import menuItem from './MenuItems'
import './NavMenu.css'


function Menu({whiteNav, setCategory}) {

 return (
  <nav>
   <ul className="menus"><MenuItems whiteNav={whiteNav} setCategory={setCategory} item={menuItem}/></ul>
  </nav>
 );
};

export default Menu;