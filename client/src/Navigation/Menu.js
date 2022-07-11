import {React, useState} from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown'
import "./Menu.css"

const ShopButton = styled.button`
`

const ButtonText =styled.p`
  color: ${props => props.class === true ? "color: white" : "color: black"}
  
`

function Menu({whiteNav}) {
  const [dropdown, setDropdown] = useState(false)
  const menuData = {
    title: "Shop",
    submenu: [
    {
    image: "https://i.ibb.co/199qZVv/starry-night.png",  
    title: "T-Shirts"
    },
    {
    image: "https://i.ibb.co/K66hNKy/poppies-3.png",
    title: "Slides",
    },
    {
    image: "https://i.ibb.co/SKBH8Y1/cypresses.png",
    title: "Crewneck"
    },
    {
    image: "https://i.ibb.co/v3VWFjT/sunflowers.png",
    title: "Hoodie"
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
    <ul className="menus">
      <li 
        className="menu-items" 
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
      {menuData.submenu ? (
      <>
      <ShopButton
        class={whiteNav}
        type="button" 
        aria-haspopup="menu"
        aria-expanded={dropdown ? "true" : "false"}
        onClick={() => setDropdown((prev) => !prev)}><ButtonText>SHOP</ButtonText>
      </ShopButton>
      <Dropdown dropdown={dropdown} submenu={menuData.submenu} />
      </>
      ) : (
        <a href="/shop">{menuData.title}</a>
      )}
      </li>
    </ul>
    )
  }

export default Menu