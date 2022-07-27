import React, { useEffect, useReducer, useState } from "react"
import {useHistory} from "react-router-dom"
import styled from 'styled-components'
import SlidingPane from "react-sliding-pane";
import "./Sliding.css";
import {BsCartDash} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import CartItem from './CartItem.js'
import { useSelector } from "react-redux";
import { MdOutlineLogout } from "react-icons/md"
import { MdOutlineLogin } from "react-icons/md"

const CartWrapper = styled.div`
  display: grid;
  grid-template-rows: 7% 93%;
`

const Burger = styled.button`
  background: transparent; 
  border:none;
`

const CartHeader = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
  grid-template-columns: 5% 90% 5%;
  align-items: center;
`

const ExitIconCont = styled. div`
  cursor: pointer;
`

const GreetingCont = styled.div`
  color:black;
  font-size: 24px;
`

const CartCont = styled.div`
  grid-template-columns: 50% 50%;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: %;
`

const InnerCartCont = styled.div`
  grid-template-rows: 87.5% 12.5%;
  height: 100%;
  width: 100%;
  display: grid;
  border-bottom: 1px solid #eee;
`

const CartItemCont = styled.div`
  height: 100%;
  max-height: 34em;
  width: 100%;
  padding: 1em;
  display: grid;
  grid-auto-rows: 95px;
  overflow-x: hidden;
  overflow-y: scroll; 
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

const CartImageCont = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  overscroll-behavior: none;
  border: 1px solid black;
`

const CartImage = styled.img`
  height: 619.6129032258064px;
  width: 600px;
  object-fit:cover;
`

const TotalCont = styled.div`
  height: 100%;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  grid-template-columns: 60% 40%
`

const OrderTotalCont = styled.div`
  border-right: 1px solid #eee;
  display: grid;
  align-items:center;
  justify-content:center;
`
const OrderTotalText = styled.p`
  font-size: 24px;
  color: black;
  width:100%;
`

const CheckoutButtonCont = styled.div`
  display: grid;
  grid-template-columns: 30% 30%;
  align-items:center;
  justify-items:center;
  justify-content:center;
  width: 100%;
`

const LinkCont = styled.div`
  
`

const CheckoutLink = styled.a`
  width: 100%;
  cursor: pointer;
  border: 1px solid transparent;
  height: 1.75em;
  display: grid;
  align-items:center;
  color: black;
  font-size: 20px;
  text-align:center;
  transition: .3s;
  &&:hover {
    text-shadow: 0 0 5px #c5c5c5;
  }
`

const IconCont = styled.div`
  display: grid;
  align-items:center;
  justify-content:center;
  width: 60%;
  height: 2em;
`

const LogoutCont = styled.div`
  display:grid;
  justify-content:center;
`

const LoginCont = styled.div`
  cursor: pointer;
`

function CartSlider({setSubTotal, headerText, setHeaderText, checkoutLogout, setCheckoutLogout, handleLogout, handleCheckout, subTotal, handleAdd, handleSubtract, cart, handleItemDelete, isPaneOpen, setIsPaneOpen, whiteNav}) {
  const user = useSelector((state) => state.user.value)

  const history = useHistory()

  function onLogin(){
    history.push('/welcome')
  }

  function onLogout() {
    setCheckoutLogout(false)
    handleLogout()
    setHeaderText("Login to see cart")
  }

  function onCheckout(){
    handleCheckout(subTotal)
  }

    const userCartItems = (() => {
      const cartCheck = cart.map((item) => {
        return item
      }) 
        if (cartCheck.length > 0) {
        const cartItems = cart.map((item) => {
          return <CartItem setSubTotal={setSubTotal} cart={cart} handleSubtract={handleSubtract} handleAdd={handleAdd} handleItemDelete={handleItemDelete} item={item}/>
        })
        return cartItems
      } else {
        return <div></div>
      }
    })()

    useEffect(() => {
      if (!user)
      setSubTotal(0)
    }, [user])
console.log('check', checkoutLogout)
  return (
    <div>
      <Burger onClick={() => setIsPaneOpen(!isPaneOpen)}>
        <BsCartDash color={whiteNav ? "white" : "black"} size={24}/>
      </Burger>
      <SlidingPane
        className="custom"
        hideHeader={true}
        overlayClassName="some-custom-overlay-class"
        isOpen={isPaneOpen}
        onRequestClose={() => {
          setIsPaneOpen(false);
        }}
      >
        <CartWrapper>
          <CartHeader>
            <ExitIconCont>
              <AiOutlineClose onClick={() => setIsPaneOpen(!isPaneOpen)} color={'black'} size={20}/>
            </ExitIconCont> 
            <GreetingCont>{headerText}</GreetingCont>
            <LogoutCont>
              {checkoutLogout? 
                (
                  <LoginCont><MdOutlineLogout onClick={onLogout} size={20} color={'black'}/></LoginCont>
                )
                : 
                (
                  <LoginCont><MdOutlineLogin onClick={onLogin} size={20} color={'black'}/></LoginCont>
                )
              }
            </LogoutCont>
          </CartHeader>
          <CartCont>
            <InnerCartCont>
              <CartItemCont>
                {userCartItems}
              </CartItemCont>
              <TotalCont>
                <OrderTotalCont>
                  <OrderTotalText>Subtotal: ${subTotal}</OrderTotalText>
                </OrderTotalCont>
                {checkoutLogout ? 
                  (
                    <CheckoutButtonCont>
                      <LinkCont>
                        <CheckoutLink onClick={onCheckout}>Checkout</CheckoutLink>
                      </LinkCont>
                      <IconCont>
                        <AiOutlineRight color={'black'}/>
                      </IconCont>
                    </CheckoutButtonCont>
                  )
                  : 
                  (
                    <div></div>
                  )
                }
              </TotalCont>
            </InnerCartCont>
            <CartImageCont>
              <CartImage src='https://i.ibb.co/WctPMhd/gogh-vertical.png'/>
            </CartImageCont>
          </CartCont>
        </CartWrapper>
      </SlidingPane>
    </div>
  );
};

export default CartSlider