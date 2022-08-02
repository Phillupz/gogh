import React from 'react'
import "./Menu.css"
import styled from 'styled-components'

function Dropdown({setCategoryFilter, categoryFilter, dropdown, setDropdown, submenus }) {
  
  function handleClick(e) {
    setCategoryFilter(e.currentTarget.id)
    setDropdown(!dropdown)
  }

  const menuComps = submenus.map((submenu, index) => {
    if (submenu.title !== categoryFilter)
      return (
        <li id={submenu.title} onClick={handleClick} name="please"  key={index} className="menu-item">
        <MenuItem className="sub">{submenu.title}</MenuItem>
       </li>
      )
  })

    return (
     <ul className={`drop ${dropdown ? "open" : ""}`}>
       {menuComps}
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