import React from 'react'
import MenuItems from './MenuItems.js'
import menuItem from './MenuItems'

function Menu({categoryFilter, setCategoryFilter}) {

 return (
  <nav>
   <ul className="menus"><MenuItems setCategoryFilter={setCategoryFilter} categoryFilter={categoryFilter} item={menuItem}/></ul>
  </nav>
 );
};

export default Menu;