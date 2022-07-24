import React from 'react'
import "./Menu.css"
import styled from 'styled-components'

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

function Dropdown({setSelectedCategory, dropdown, setDropdown, submenus }) {
  
  function handleClick(e) {
    setSelectedCategory(e.currentTarget.id)
    setDropdown(!dropdown)
  }

    return (
     <ul className={`drop ${dropdown ? "open" : ""}`}>
      {submenus.map((submenu, index) => (
       <li id={submenu.title} onClick={handleClick} name="please"  key={index} className="menu-item">
        <MenuItem className="sub">{submenu.title}</MenuItem>
       </li>
      ))}
     </ul>
    );
   };
   
   export default Dropdown;