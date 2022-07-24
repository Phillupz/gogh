import {React, useState} from 'react'
import styled from 'styled-components'
import Dropdown from './Dropdown.js'
import { GiHamburgerMenu } from "react-icons/gi"
import './NavMenu.css'


const Button = styled.button`

`

const InnerButton = styled.button`
  color: white;
`

function MenuItems({whiteNav, setCategory}) {
  const [dropdown, setDropdown] = useState(false)
  const menuItem = {
    title: "Services",
    submenu: [
    {
    title: "T-Shirts",
    image: "https://i.ibb.co/h8GNkM1/tshirts.png"
    },
    {
    title: "Crewnecks",
    image: "https://i.ibb.co/vPXQsM0/crewnecks.png"
    },
    {
    title: "Hoodies",
    image: "https://i.ibb.co/nf8h566/hoodies.png"
    },
    {
    title: "Slides",
    image: "https://i.ibb.co/J7J9kC4/slides.png"
    },
    {
    title: "Bags",
    image: "https://i.ibb.co/3hWsTsd/bags.png"
    },
    {
    title: "All",
    image: "https://i.ibb.co/c3MKjXt/all-1.png"
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
          className={whiteNav ? "whiteNav" : "blackNav"}
          aria-haspopup="menu"
          aria-expanded={dropdown ? "true" : "false"}
          onClick={() => setDropdown((prev) => !prev)}>
            Shop
        </Button>
        <Dropdown setDropdown={setDropdown} setCategory={setCategory} dropdown={dropdown} submenus={menuItem.submenu} />
       </>
      ) : (
       <div name={menuItem.title}>Shop</div>
      )}
     </li>
    )
   }

export default MenuItems