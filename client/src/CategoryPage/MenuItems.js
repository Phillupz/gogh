import {React, useState} from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown.js'
import "./Menu.css"

function MenuItems({categoryFilter, setCategoryFilter}) {
  const [dropdown, setDropdown] = useState(false)
  const menuItem = {
    title: "Services",
    submenu: [
    {
    title: "All"
    },
    {
    title: "T-Shirts"
    },
    {
    title: "Crewnecks",
    },
    {
    title: "Hoodies"
    },
    {
    title: "Slides"
    },
    {
    title: "Bags"
    }
  ]
}

 const onMouseEnter = () => {
  window.innerWidth > 960 && setDropdown(true);
 };
 
 const onMouseLeave = () => {
  window.innerWidth > 960 && setDropdown(false);
 }

  return (
    <li 
      className="menu-item" 
    
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      >
    {menuItem.submenu ? (
      <>
      <Button
        className="category-button"
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}>
        {categoryFilter}
      </Button>
      <Dropdown categoryFilter={categoryFilter} setDropdown={setDropdown} setCategoryFilter={setCategoryFilter} dropdown={dropdown} submenus={menuItem.submenu} />
      </>
    ) : (
      <div name={menuItem.title}>{categoryFilter}</div>
    )}
    </li>
  )
}

const Button = styled.button`
  display: grid;
  align-items: center;
`

export default MenuItems