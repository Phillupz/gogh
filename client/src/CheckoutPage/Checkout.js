import { React, useEffect } from 'react'
import styled from 'styled-components'
import CheckoutButton from './CheckoutButton.js'
import CartItem from '../Navigation/CartItem.js'
import Nav from '../Navigation/Nav.js'
import { useSelector, useDispatch } from "react-redux";

const CartWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 10% 90%;
  padding-left: 2em;
  padding-right: 2em;
  margin-top: 3em;
  width: 100%;
  height: 625px;
  border-bottom: 1px solid #eee;
`

const CartHeader = styled.div`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #eee;
  display: grid;
  align-items: center;
  justify-content: start;
`

const GreetingCont = styled.span`
  color:black;
  font-size: 24px;
`

const CartCont = styled.div`
  grid-template-columns: 49% 49%;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 2%;
  padding-left: 1em;
`

const InnerCartCont = styled.div`
  grid-template-rows: 86% 8%;
  height: 100%;
  width: 100%;
  display: grid;
  
`

const CartItemCont = styled.div`
  height: 100%;
  max-height: 28em;
  margin-bottom: 1em;
  width: 100%;
  display: grid;
  grid-auto-rows: 95px;
  margin-top: 1em;
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
  height: 100%;
  width: 100%;
  object-fit: cover;
`

const TotalCont = styled.div`
  height: 5em;
  width: 100%;
  border-top: 1px solid #eee;
  display: grid;
  grid-template-columns: 60% 40%;

`

const OrderTotalCont = styled.div`
  border-right: 1px solid #eee;
  display: grid;
  height: 4em;
  align-items:center;
  justify-content:center;
`
const OrderTotalText = styled.p`
  font-size: 24px;
  margin-top: .75em;
  color: black;
  width:100%;
`

const CheckoutButtonCont = styled.div`
  display: grid;
  align-items:center;

  justify-content:center;
  width: 100%;
`

const LinkCont = styled.div`
  
`

const CheckoutLink = styled.a`
  width: 100%;
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

const SuccessCont = styled.div`
  display: grid;
  text-align: center;
  align-content:center;
  width: 100%;
`

const SuccessText = styled.p`
  color: black;
  font-size: 20px;
`

function Checkout({paymentSuccess, setWhiteNav, setCategory, handleAdd, handleSubtract, subTotal, setSubTotal, handleItemDelete, cart, whiteNav, handleToken}) {
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
    setWhiteNav(false)
  })

  const cartComponents = (() => {
    const cartCheck = cart.map((item) => {
      return item
    }) 
      if (cartCheck.length > 0) {
      return cart.map((item) => {
        return <CartItem handleItemDelete={handleItemDelete} handleSubtract={handleSubtract} setSubTotal={setSubTotal} subTotal={subTotal} handleAdd={handleAdd} item={item}/>
      })
    } 
  })()

  return (
    <>
    <Nav setCategory={setCategory} whiteNav={whiteNav}/>
    <CartWrapper>
      <CartHeader>
        <GreetingCont>{`Hey, ${user.first}`}</GreetingCont>
      </CartHeader>
      <CartCont>
        {paymentSuccess ?
        (
        <SuccessCont>
          <SuccessText>Thank you for your order!</SuccessText>
        </SuccessCont>
        )
        :
        (
        <InnerCartCont>
          <CartItemCont>
            {cartComponents}
          </CartItemCont>
          <TotalCont>
            <OrderTotalCont>
              <OrderTotalText>{`Total: $${(subTotal * 1.0875).toFixed(2)}`}</OrderTotalText>
            </OrderTotalCont>
            <CheckoutButtonCont>
              <CheckoutButton subTotal={subTotal} cart={cart} handleToken={handleToken}/>
            </CheckoutButtonCont>
          </TotalCont>
        </InnerCartCont>
        )
        }
        <CartImageCont>
          <CartImage src='https://i.ibb.co/V9kzvwW/gogh-horizontal.png'/>
        </CartImageCont>
      </CartCont>
    </CartWrapper>
    </>
  )
}

export default Checkout