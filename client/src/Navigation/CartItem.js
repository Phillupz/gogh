import {React, useState }from 'react'
import styled from 'styled-components'

const CartItemCont = styled.div`
  height: 5em;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
`

const Image = styled.img`
  height: 80px;
  wdith: 100px;
`

const InfoCont =styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%
`

const ProductName = styled.p`
  text-align:center;
  display: grid;
  justify-content:center;
  align-items: center;
  color:black;
`

const ProductPrice = styled.p`
  display: grid;
  justify-content:center;
  align-items: center;
  color:black;
`

const QtyCont = styled.div`
  display: grid;
  grid-template-columns: 33.33% 33.33% 33.33%;
  justify-content:center;
  justify-items:center;
  align-items: center;
`

const Total = styled.div`
  display: grid;
  justify-content:center;
  align-items: center;
  color:black;
`

const QtyButton = styled.button`
  background-color: white;
  border: none;
  width: 2em;
  color:black;
`

const PlcHoldButton = styled.button`
  background-color: white;
  border: none;
  width: 2em;
`

const QtyTextCont = styled.div`
 color: black;
 font-size:16px;
`

function CartItem({item}) {
  const [qty, setQty] = useState(1)
  const [visible, setVisible] = useState(true)

  function handleSubtract() {
    if (qty >= 2) {
      return setQty(qty - 1)
    } else {
      setVisible(!visible)
    }
  }

  function handleAdd() {
    if (qty === 1) {
      return setQty(qty + 1), setVisible(true)
    } else {
      return setQty(qty + 1)
    }
  }

  return (
    <CartItemCont> 
      <Image src={item.image}/>
      <InfoCont>
        <ProductName>{item.name}</ProductName>
        <ProductPrice>{`$${item.price}`}</ProductPrice>
        <QtyCont>
          {visible 
            ? (<QtyButton onClick={handleSubtract}>-</QtyButton>)
            : (<PlcHoldButton></PlcHoldButton>)
          }
          <QtyTextCont>{qty}</QtyTextCont>
          <QtyButton onClick={handleAdd}>+</QtyButton>
        </QtyCont>
        <Total>{`$${item.price * qty}`}</Total>
      </InfoCont>
    </CartItemCont>
  )
}

export default CartItem