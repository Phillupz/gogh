import React from "react"
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'
import { MdOutlineLogout } from "react-icons/md"

const NavContainer = styled.div`
  display: grid;
  align-items:center;
  align-content: center;
  grid-template-columns: 12.5% 86%;
  height: 3.75em;
  position: absolute;
  width: 100%;
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

const RightButtonCont = styled.div`
  height:100%;
  width:75%;
  display: grid;
  justify-content: center;
  grid-gap: 10%;
  align-items: center;
  justify-content: end;
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
  cursor: pointer;
`

function BackNav({whiteNav, handleBackLogout, setIsAuthenticated, setUser}) {

  function handleLogout() {
    handleBackLogout()
  }

   const whiteLogo = "https://i.ibb.co/DtSL2vW/logowhite-removebg-preview.png"
   const blackLogo = "https://i.ibb.co/KhWHXGN/Logo.png"

  return (
    <NavContainer>
      <Logo>
        <LogoImage src={whiteNav ? whiteLogo : blackLogo}/>
      </Logo>
      <MenuCont>
        <LeftMenuCont>
        </LeftMenuCont>
        <RightMenuCont>
          <BurgerCont>
            <CartCont>
              <MdOutlineLogout color={"black"} onClick={handleLogout} size={22}/>
            </CartCont>
          </BurgerCont>
        </RightMenuCont>
      </MenuCont>
    </NavContainer>
  )
}

export default BackNav