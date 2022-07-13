import {React, useState }from 'react'
import styled from 'styled-components'

const OrderItemCont = styled.div`
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
  justify-content:center;
  align-items: center;
`

const Total = styled.div`
  display: grid;
  justify-content:center;
  align-items: center;
  color:black;
`

const QtyTextCont = styled.div`
 color: black;
 font-size:16px;
`

function OrderItem({item}) {
  return (
    <OrderItemCont> 
      <Image src={item.product.image}/>
      <InfoCont>
        <ProductName>{item.product.name}</ProductName>
        <ProductPrice>{`$${item.product.price}`}</ProductPrice>
        <QtyCont>
          <QtyTextCont>{item.quantity}</QtyTextCont>
        </QtyCont>
        <Total>{`$${item.product.price * item.quantity}`}</Total>
      </InfoCont>
    </OrderItemCont>
  )
}

export default OrderItem