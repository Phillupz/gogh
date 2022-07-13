import React, { Component, useState } from "react";
import styled from 'styled-components'
import SlidingPane from "react-sliding-pane";
import "./Sliding.css";
import {BsCartDash} from 'react-icons/bs'
import {AiOutlineRight} from 'react-icons/ai'
import {AiOutlineClose} from 'react-icons/ai'
import CartItem from './CartItem.js'

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
  grid-template-columns: 5% 95%;
  align-items: center;
`

const ExitIconCont = styled. div`
  
`

const GreetingCont = styled.div`
  color:black;
  font-size: 24px;
`

const CartCont = styled.div`
  grid-template-columns: 49% 49%;
  height: 100%;
  width: 100%;
  display: grid;
  grid-gap: 2%;
`

const InnerCartCont = styled.div`
  grid-template-rows: 87.5% 12.5%;
  height: 100%;
  width: 100%;
  display: grid;
`

const CartItemCont = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-auto-rows: 95px;
  margin-top: 1em;
`

const CartImageCont = styled.div`
  overflow-y: hidden;
  overflow-x: hidden;
  overscroll-behavior: none;
`

const CartImage = styled.img`
  height: 659.6129032258064px;
  width: 576px;

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

function CartSlider({whiteNav}) {
  const [state, setState] = useState({
    isPaneOpen: false,
    isPaneOpenLeft: false,
  });

  const mock = [
    {
    name: "The Mulberry Tree",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/D45XZ8r/the-mulberry-tree.png",
    category: "T-Shirt",
    price: 40,
    },
    {
    name: "Sunflowers",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/0QtkK3m/sunflowers.png",
    category: "T-Shirt",
    price: 40,
    },
    {
    name: "Poppies",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/CH6Z23F/poppies.png",
    category: "T-Shirt",
    price: 40,
    },
    {
    name: "Irises",
    description: "Lorem Ipsum",
    image: "https://i.ibb.co/GdYdyP7/irises.png",
    category: "T-Shirt",
    price: 40,
    }
  ]

  console.log(mock)

  const cartComponents = mock.map((item) => {
    return <CartItem item={item}/>
  })

  return (
    <div>
      <Burger onClick={() => setState({ isPaneOpen: true })}>
        <BsCartDash color={whiteNav ? "white" : "black"} size={24}/>
      </Burger>
      <SlidingPane
        className="custom"
        hideHeader={true}
        overlayClassName="some-custom-overlay-class"
        isOpen={state.isPaneOpen}
        title="Hey, Phil!"
        onRequestClose={() => {
          // triggered on "<" on left top click or on outside click
          setState({ isPaneOpen: false });
        }}
      >
        <CartWrapper>
          <CartHeader>
            <ExitIconCont>
              <AiOutlineClose color={'black'} size={20}/>
            </ExitIconCont> 
            <GreetingCont>
              Hey Phil!
            </GreetingCont>
          </CartHeader>
          <CartCont>
            <InnerCartCont>
              <CartItemCont>
                {cartComponents}
              </CartItemCont>
              <TotalCont>
                <OrderTotalCont>
                  <OrderTotalText>Subtotal: $180</OrderTotalText>
                </OrderTotalCont>
                <CheckoutButtonCont>
                  <LinkCont>
                    <CheckoutLink>Checkout</CheckoutLink>
                  </LinkCont>
                  <IconCont>
                    <AiOutlineRight color={'black'}/>
                  </IconCont>
                </CheckoutButtonCont>
              </TotalCont>
            </InnerCartCont>
            <CartImageCont>
              <CartImage src='https://i.ibb.co/f2L9NmM/Cypresses-With-Two-Female-Figures.jpg'/>
            </CartImageCont>
          </CartCont>
        </CartWrapper>
      </SlidingPane>
    </div>
  );
};

export default CartSlider