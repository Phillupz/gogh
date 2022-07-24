import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'
import ProductDisplay from './ProductDisplay.js'
import ProductPiece from './ProductPiece.js'
import Review from './ReviewBar.js'
import ProductReview from './ProductReview.js'
import { useSelector, useDispatch } from "react-redux";
import { userAdded } from "../Redux/userSlice"

function Product({handleLogout, handleCheckout, handleItemDelete, setSubTotal, subTotal, handleAdd, handleSubtract, handleAddToCart, cart, setCart, isPaneOpen, setIsPaneOpen, setCategory, selectedProduct, whiteNav, setWhiteNav}) {
  const [rating, setRating] = useState(0)
  const user = useSelector((state) => state.user.value)

  useEffect(() => {
   if (user) {
    fetch(`/users/${user.id}/cart_items`)
    .then((r) => r.json())
    .then((data) => {
      setSubTotal(data.reduce((total, item)=>total + (item.product.price * item.quantity),0))
    })
   }
  }, [handleAddToCart])
   

   useEffect(() => {
    setIsPaneOpen(false)
    fetch('/authorize_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          fetch(`/users/${user.id}/cart_items`)
          .then((r) => r.json())
          .then((data) => setCart(data.reverse()))
        })
      }
    })
  }, [])

  useEffect(() => {
    fetch(`/products/${selectedProduct.id}/rating`)
    .then((r) => r.json())
    .then((data) => {
      const productRating = (() => {
        if (data === null) {
          return 0
        } else {
          return parseFloat(data)
        }
      })()
      setRating(productRating)
    })
  }, [selectedProduct])

  useEffect(() => {
    setWhiteNav(false)
  })

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  const reviews = selectedProduct.reviews.map((review) => {
    return <ProductReview review={review}/>
  })

  return (      
    <> 
      <Nav handleLogout={handleLogout} handleCheckout={handleCheckout} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} handleItemDelete={handleItemDelete} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} setCategory={setCategory} whiteNav={whiteNav}/>
      <ProductDisplay setIsPaneOpen={setIsPaneOpen} cart={cart} handleAdd={handleAdd} handleAddToCart={handleAddToCart} rating={rating} selectedProduct={selectedProduct}/>
      <ProductPiece selectedProduct={selectedProduct}/>
      <Review rating={rating} selectedProduct={selectedProduct}/>
      <>
        {reviews}
      </>
    </>
  )
}

export default Product