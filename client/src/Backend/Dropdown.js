import React from 'react'
import "./Menu.css"
import styled from 'styled-components'

function Dropdown({setCategoryError, categoryError, setSelectedCategory, dropdown, setDropdown, submenus }) {
  
  function handleClick(e) {
    setSelectedCategory(e.currentTarget.id)
    setDropdown(!dropdown)
    setCategoryError({
      ...categoryError,
      category: []
    })
  }

    return (
     <ul className={`drop ${dropdown ? "open" : ""}`}>
      {submenus.map((submenu, index) => (
       <li id={submenu.title} onClick={handleClick} name="please"  key={index} className="menu-item">
        <MenuItem className="sub">{submenu.title}</MenuItem>
       </li>
      ))}
     </ul>
    )
   }

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
   
   export default Dropdown;