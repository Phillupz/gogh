import {React, useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import styled from 'styled-components'
import Nav from '../Navigation/Nav.js'
import { useSelector, useDispatch } from "react-redux";
import { login } from "../Redux/userSlice"
import LeftDisplay from './LeftDisplay.js'
import RightDisplay from './RightDisplay.js'
import HomeProdPiece from './HomeProdPiece.js'

function Home({hideCheckout, headerText, setHeaderText, checkoutLogout, setCheckoutLogout, handleLogout, handleCheckout, handleItemDelete, setSubTotal, subTotal, handleAdd, handleSubtract, cart, setCart, isPaneOpen, setIsPaneOpen, handleProductClick, setCategory, category, whiteNav, setWhiteNav, products, onLogout}){
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)
  const [displayedProducts, setDisplayedProducts] = useState([])
  const [featuredProduct, setFeaturedProduct] = useState([])

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  useEffect(() => {
    fetch('/featured_products')
    .then((r) => r.json())
    .then((data) => {
      if (data.length > 0) {
        const featured = data.map((feature) => {
          if (feature.product.category === 'T-Shirts' || feature.product.category === 'Hoodies' || feature.product.category === 'Bags') {
            return <LeftDisplay product={feature.product}/>
          } else if ( (feature.product.category === 'Crewnecks' || feature.product.category === 'Slides' )) {
            return <RightDisplay product={feature.product} />
          }
         })
         setDisplayedProducts(featured)
      }
      fetch('./products/6')
      .then((r) => r.json())
      .then((data) => setFeaturedProduct(data))
    })
   }, [])
   

  useEffect(() => {
    if (!user || user.length === 0) {
      return setCheckoutLogout(false)
    }
   }, [])

  // useEffect(() => {
  //   if (user) {
  //    fetch(`/users/${user.id}/cart_items`)
  //    .then((r) => r.json())
  //    .then((data) => {
  //      setSubTotal(data.reduce((total, item)=>total + (item.product.price * item.quantity),0))
  //    })
  //   } 
  //  }, [])

  useEffect(() => {
    setIsPaneOpen(false)
    fetch('/authorize_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          dispatch(login(user))
          setSubTotal(0)
          setHeaderText(`Hey, ${user.first}`)
          fetch(`/users/${user.id}/cart_items`)
          .then((r) => r.json())
          .then((data) => {
            setCheckoutLogout(true)
            setCart(data.reverse())
            setSubTotal(data.reduce((total, item)=>total + (item.product.price * item.quantity),0))

          })
        })
      } else {
        setCheckoutLogout(false)
      }
    })
  }, [])

  useEffect(() => {
   setWhiteNav(true)
  }, [])


  return (
    <CategoryCont>
      <Nav hideCheckout={hideCheckout} setSubTotal={setSubTotal} headerText={headerText} setHeaderText={setHeaderText} checkoutLogout={checkoutLogout} setCheckoutLogout={setCheckoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} setCategory={setCategory} whiteNav={whiteNav} onLogout={onLogout}/>
        <>
        <HeaderCont>
          <HomeImage src="https://i.ibb.co/wrjTNDR/Van-gogh-removebg-preview.png"/>
        </HeaderCont>
        <HeaderImage src="https://i.ibb.co/TKhDhTW/the-rhone.png"/>
        </>
        <Header>Featured Collection</Header>
        <PieceName>Poppies</PieceName>
      {displayedProducts}
      <HomeProdPiece featuredProduct={featuredProduct} />
    </CategoryCont>
  )
}

const CategoryCont = styled.div`
  height: 100%;
  width: 100%;
  color:black;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`
const HeaderImage = styled.img`
  height:50%;
  width: 100%;
`

const HeaderCont = styled.div`
  display: grid;
  justify-content:center;
  align-content: center;
  position: absolute;
  width: 100%;
  background-color: transparent;
  height: 3em;
  color: white;
  margin-top: 17em;
  text-align:center;
`

const HeaderText = styled.p`
  text-align:center;
  font-size:52px;
`

const Header = styled.p`
  text-align:center;
  padding-top: 3em;
  font-size: 36px;
`
const PieceName = styled.p`
  text-align:center;
  padding-top: 1em;
  font-size: 26px;
  padding-bottom: 2em;
`
const HomeImage = styled.img`
  margin_left: auto;
  margin-right: auto;
  
`

export default Home