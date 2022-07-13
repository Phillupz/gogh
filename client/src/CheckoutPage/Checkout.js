import { React } from 'react'
import styled from 'styled-components'
import CheckoutButton from './CheckoutButton.js'
import CartItem from '../Navigation/CartItem.js'
import Nav from '../Navigation/Nav.js'

const CartWrapper = styled.div`
  display: grid;
  position: absolute;
  grid-template-rows: 10% 90%;
  padding: 3em;
  margin-top: 2em;
  width: 100%;
  height: 650px;
  border-bottom: 1px solid #eee
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
  grid-template-rows: 94% 6%;
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
  height: 109.8%;
  baclground-color:blue; 
  margin-right: 2em;
`

const CartImage = styled.img`
  height: 601px;
  width: 739px;
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

function Checkout({whiteNav, handleToken}) {
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
    <>
    <Nav whiteNav={whiteNav}/>
    <CartWrapper>
      <CartHeader>
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
              <CheckoutButton handleToken={handleToken}/>
            </CheckoutButtonCont>
          </TotalCont>
        </InnerCartCont>
        <CartImageCont>
          <CartImage src='https://i.ibb.co/rFSfp5N/Bowl-with-Peonies-and-Roses.jpg'/>
        </CartImageCont>
      </CartCont>
    </CartWrapper>
    </>
  )
}

export default Checkout