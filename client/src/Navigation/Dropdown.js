import React from 'react'
import {useHistory} from "react-router-dom"
import './NavMenu.css'
import styled from 'styled-components'
import MenuImage from './MenuImage.js'

const MenuItem = styled.div`
  text-align: left;
  padding: 0.7rem 1rem;
  color:black;
  font-size: 16px;
  transition: .5s;
  &&:hover {
    background-color: #eee;
  }
`

function Dropdown({setCategory, dropdown, setDropdown, submenus }) {
  const history = useHistory()
  
  function handleClick(e) {
    setCategory(e.currentTarget.id)
    setDropdown(!dropdown)
    const category = e.currentTarget.id
    history.push(`/shop/${category.toLowerCase()}`)
  }

    return (
     <ul className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
       <li id={submenu.title} onClick={handleClick} name="please"  key={index} className="menu-items">
        <MenuImage submenu={submenu}/>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;