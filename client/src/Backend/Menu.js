import React from 'react'
import MenuItems from './MenuItems.js'
import menuItem from './MenuItems'

function Menu({setCategoryError, categoryError, selectedCategory, setSelectedCategory}) {

 return (
  <nav>
   <ul className="menus"><MenuItems setCategoryError={setCategoryError} categoryError={categoryError} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} item={menuItem}/></ul>
  </nav>
 );
};

export default Menu;