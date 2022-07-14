import {React, useState} from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import { GiHamburgerMenu } from "react-icons/gi"
import "./Category.css"

const Button = styled.button`
height: 2em;
font-size: 16px;
outline: none;
border: 1px solid #eee;
margin-top: 6px;
width: 97%;
font-family: Josefin Sans, sans-serif;
padding-left:8px;
transition: .5s;
&&:hover {
  border: 1px solid #ccc;
}
`

function MenuItems({selectedCategory, setSelectedCategory}) {
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
       className="menu-items" 
      
       onMouseEnter={onMouseEnter}
       onMouseLeave={onMouseLeave}
       >
      {menuItem.submenu ? (
       <>
        <Button
          type="button" 
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
          {selectedCategory}
        </Button>
        <Dropdown setDropdown={setDropdown} setSelectedCategory={setSelectedCategory} dropdown={dropdown} submenus={menuItem.submenu} />
       </>
      ) : (
       <div name={menuItem.title}>{selectedCategory}</div>
      )}
     </li>
    )
   }

export default MenuItems