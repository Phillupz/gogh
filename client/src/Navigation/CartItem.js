import {React, useEffect, useState }from 'react'
import styled from 'styled-components'
import {AiOutlineDelete} from 'react-icons/ai'

function CartItem({setSubTotal, cart, handleAdd, handleSubtract, handleItemDelete, item}) {
  const [qty, setQty] = useState(1)
  const [visible, setVisible] = useState(true)
  const [product, setProduct] = useState([])

  useEffect(() => {
    setSubTotal(cart.reduce((total, cartItem)=>total + (cartItem.product.price * cartItem.quantity),0))
  }, [handleAdd, handleSubtract])


  useEffect(() => {
    fetch(`/products/${item.product_id}`)
    .then((r) => r.json())
    .then((data) => setProduct(data))
  }, [])

  function onSubtract() {
    if (item.quantity >= 2) {
      return handleSubtract(item)
    } else {
      setVisible(!visible)
    }
  }

  function onAdd() {
    handleAdd(item)
    setVisible(true)
  }

  function onDelete() {
    setVisible(!visible)
    handleItemDelete(item)
  }

  return (
    <CartItemCont> 
      <Image src={item.product.image}/>
      <InfoCont>
        <ProductName>{item.product.name}</ProductName>
        <ProductPrice>{`$${item.product.price}`}</ProductPrice>
        <QtyCont>
          {visible 
            ? (<QtyButton onClick={onSubtract}>-</QtyButton>)
            : (<PlcHoldButton onClick={onDelete}><AiOutlineDelete/></PlcHoldButton>)
          }
          <QtyTextCont>{item.quantity}</QtyTextCont>
          <QtyButton onClick={onAdd}>+</QtyButton>
        </QtyCont>
        <Total>{`$${item.product.price * item.quantity}`}</Total>
      </InfoCont>
    </CartItemCont>
  )
}

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
  border: 1px solid transparent;
  transition: .5s;
  &&:hover {
    border: 1px solid #ccc
  }
`

const PlcHoldButton = styled.button`
  background-color: white;
  border: none;
  width: 2em;
  padding-top: 2px;
`

const QtyTextCont = styled.div`
  color: black;
  font-size:16px;
`

export default CartItem