import {React, useEffect, useState} from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown.js'
import { GiHamburgerMenu } from "react-icons/gi"
import "./Menu.css"

const Button = styled.button`

`

function MenuItems({setCategoryError, categoryError, selectedCategory, setSelectedCategory}) {
  const [dropdown, setDropdown] = useState(false)

  const menuItem = {
    title: "Services",
    submenu: [
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
          className={categoryError.length > 0 && selectedCategory? "backend-button-red" : "backend-button"}
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
          {selectedCategory}
        </Button>
        <Dropdown setCategoryError={setCategoryError} categoryError={categoryError} setDropdown={setDropdown} setSelectedCategory={setSelectedCategory} dropdown={dropdown} submenus={menuItem.submenu} />
       </>
      ) : (
       <div name={menuItem.title}>{selectedCategory}</div>
      )}
     </li>
    )
   }

export default MenuItems