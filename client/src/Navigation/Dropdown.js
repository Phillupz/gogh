import React from 'react'
import "./Menu.css"
import styled from 'styled-components'
import MenuImage from './MenuImage.js'

const Image = styled.img`
  width: 438.2px;
  height: 228.2px;
`

function Dropdown({ dropdown, submenu }) {
    return (
     <div className={`dropdown ${dropdown ? "show" : ""}`}>
      {submenu.map((menuItem) => (
        <MenuImage menuItem={menuItem}/>
      ))}
     </div>
    );
   };
   
   export default Dropdown;