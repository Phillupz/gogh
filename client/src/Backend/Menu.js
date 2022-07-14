import React from 'react'
import MenuItems from './MenuItems.js'
import menuItem from './MenuItems'
import "./Category.css"

function Menu({selectedCategory, setSelectedCategory}) {

 return (
  <nav>
   <ul className="menus"><MenuItems selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} item={menuItem}/></ul>
  </nav>
 );
};

export default Menu;