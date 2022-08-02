import React, { useEffect, useState } from "react"
import {useRouteMatch, useHistory} from "react-router-dom"
import styled from 'styled-components'
import Menu from './Menu.js'
import CartSlider from'./CartSlider.js'

function Nav({hideCheckout, setSubTotal, headerText, setHeaderText, checkoutLogout, setCheckoutLogout, handleLogout, handleCheckout, subTotal, handleSubtract, handleAdd, cart, handleItemDelete, isPaneOpen, setIsPaneOpen, setCategory, whiteNav, onLogout, setIsAuthenticated}) {
  const match = useRouteMatch()
  const history = useHistory()

  const iconDisplay = (() => {
    if (match.path.toLowerCase().includes("checkout")) {
      return (
        <div></div>
        )
    } else {
      return (
        <CartCont>
          <CartSlider hideCheckout={hideCheckout} setSubTotal={setSubTotal} headerText={headerText} setHeaderText={setHeaderText} checkoutLogout={checkoutLogout} setCheckoutLogout={setCheckoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} subTotal={subTotal} handleSubtract={handleSubtract} handleAdd={handleAdd} cart={cart} handleItemDelete={handleItemDelete} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} whiteNav={whiteNav}/>
        </CartCont>
        )
    }
  })()
 
   const whiteLogo = "https://i.ibb.co/DtSL2vW/logowhite-removebg-preview.png"
   const blackLogo = "https://i.ibb.co/KhWHXGN/Logo.png"

  return (
    <NavContainer>
      <Logo>
        <LogoImage onClick={() => {return history.push('/home')}} src={whiteNav ? whiteLogo : blackLogo}/>
      </Logo>
      <MenuCont>
        <LeftMenuCont>
          <IconCont>
            <Menu whiteNav={whiteNav} setCategory={setCategory} />
          </IconCont>
        </LeftMenuCont>
        <RightMenuCont>
          <BurgerCont>{iconDisplay}</BurgerCont>
        </RightMenuCont>
      </MenuCont>
    </NavContainer>
  )
}

const NavContainer = styled.div`
  display: grid;
  align-items:center;
  align-content: center;
  position: absolute;
  width: 100%;
  grid-template-columns: 12.5% 86%;
  height: 3.75em;
`

const Logo = styled.div`
  height: 60px;
  width: 40px;
  width: 100%;
  display:grid;
  justify-items: center;
  align-items:center;
  top: 1em;
  left: 1em;
  cursor: pointer;
`

const MenuCont = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  display: grid;
  grid-template-columns: 20% 10%;
  justify-items: center;
  grid-gap: 72%;
`

const RightMenuCont = styled.div`
  width:100%;
  height: 100%;
  display: grid;
  align-items: center;
  margin-right: 2em;
  justify-content:end
`

const LeftMenuCont = styled.div`
  width:100%;
  height: 100%;
  display: grid;
  justify-content: left;
`

const IconCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  justify-content:center;
  align-content: center;
`

const LogoImage = styled.img`
  height: 36.75px;
  width: 144.55px;
`

const BurgerCont = styled.div`
  border-radius: 50%;
  height: 45px;
  width: 45px;
  display: grid;
`

const CartCont =styled.div`
  display: grid;
  justify-content: center;
  align-content: center;
`

export default Nav