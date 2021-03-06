import {React, useEffect, useState} from "react";
import { Switch, useHistory, Route, useLocation} from "react-router-dom"
import styled from 'styled-components'
import './App.css'
import Checkout from './CheckoutPage/Checkout.js'
import AccountAccess from './AccountAccess/LoginForm.js'
import Category from './CategoryPage/Category.js'
import Product from './ProductPage/Product.js'
import AdminLogin from './Backend/AdminLogin.js'
import Backend from './Backend/Backend.js'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./Redux/userSlice"
import Home from './Home/Home.js'

function App() {
  const history = useHistory()
  const [loadCont, setLoadCont] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([]);
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState([])
  const [whiteNav, setWhiteNav] = useState(false)
  const [category, setCategory] = useState("All")
  const [selectedProduct, setSelectedProduct] = useState([])
  const [routeFormat, setRouteFormat] = useState("")
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [cart, setCart] = useState([])
  const [subTotal, setSubTotal] = useState(0)
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const [headerText, setHeaderText] = useState("Login to see cart")
  const [checkoutLogout, setCheckoutLogout] = useState(false)
  const dispatch = useDispatch()
  const location = useLocation()
  const [productReviews, setProductReviews] = useState([])
  const user = useSelector((state) => state.user.value)



  useEffect(() => {
    fetch(`/reviews`)
    .then((r) => r.json())
    .then((data) => setProductReviews(data.reverse()))
  }, [])

  useEffect(() => {
    fetch('/authorize_user')
    .then((res) => {
      if (res.ok) {
        res.json()
        .then((user) => {
          dispatch(login(user))
        })
      }
    })
  }, [])

  useEffect(() => {
    if ((location.pathname !== '/admin') && (location.pathname !== '/admin/backend' ) && (location.pathname !== '/welcome' )) {
      if ((!selectedProduct || selectedProduct.length === 0) || (!category || category.length === 0))
    {
      return history.push('/home')
    }
    }
   }, [])
   

  useEffect(() => {
    fetch('/products')
    .then((r) => r.json())
    .then((data) => setProducts(data.reverse()))
  }, [])

  function handleAddReview(selectedProduct, reviewText, starRating){
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        rating: starRating,
        text: reviewText,
        user_id: user.id,
        product_id: selectedProduct.id
      })
    })
    .then((r) => r.json())
    .then((data) => {
      console.log("data", data.user)
      setProductReviews([data, ...productReviews])
    })
  }

  function handleLogout() {
    fetch('/logout', {
      method:'DELETE'
  }).then(() => {
    dispatch(logout())
    setIsPaneOpen(false)
    setCart([])
    setSubTotal(0)
    setCheckoutLogout(false)
    setHeaderText("Login to see cart")
  })
  }

  function handleBackLogout() {
    fetch('/logout', {
      method:'DELETE'
  }).then(() => {
    dispatch(logout())
    setIsPaneOpen(false)
    setCart([])
    setSubTotal(0)
    setCheckoutLogout(false)
    setHeaderText("Login to see cart")
    history.push('/home')
  })
  }

  function handleCheckout(subTotal){   
    history.push('/checkout')
  }


  function handleItemDelete(item){
    const postDelete = cart.filter((cartItem) => {
      return cartItem.id !== item.id
    })
    setCart(postDelete)
    setSubTotal(postDelete.reduce((total, cartItem)=>total + (cartItem.product.price * cartItem.quantity),0))
    fetch(`/cart_items/${item.id}`, {
      method: "DELETE"
    })
  }

  


  function handleAddToCart() {
    if (!user || user.length === 0 || user.first === "") {
      return history.push('/welcome')
    } else {
      const configObj = {
        user_id: user.id,
        product_id: selectedProduct.id,
        quantity: 1,
      }
      const cartCheck = cart.filter((item) => {
        return (item.product_id === selectedProduct.id)
    
      }) 
        if (cartCheck.length > 0) {
        fetch(`/cart_items/${cartCheck[0].id}`, {
          method: 'PATCH',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            ...cartCheck,
            quantity: cartCheck[0].quantity + 1
          })
        })
        .then((r) => r.json())
        .then((data) => {
          const postUpdate = cart.map((cartItem) => {
            if (cartItem.id === cartCheck[0].id) {
              return data 
            } else {
              return cartItem
            }
          })
          setIsPaneOpen(true)
          setCart(postUpdate)
          setSubTotal(cart.reduce((total, item)=>total + (item.product.price * item.quantity),0))
        })
      } else {
      fetch('/cart_items', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json'
        },
        body: JSON.stringify(configObj)
      })
      .then((r) => r.json())
      .then((data) => {
        const updatedCart = [data, ...cart]
        setCart(updatedCart)
      })
      setIsPaneOpen(true)
      }
    }
  }

  function handleAdd(item) {
    fetch(`/cart_items/${item.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...item,
        quantity: item.quantity + 1
      })
    })
    .then((r) => r.json())
    .then((data) => {
      const postUpdate = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return data 
        } else {
          return cartItem
        }
      })
      setCart(postUpdate)
    })
  }

  function handleSubtract(item){
    console.log("q", item.quantity)
    fetch(`/cart_items/${item.id}`, {
      method: 'PATCH',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        ...item,
        quantity: item.quantity - 1
      })
    })
    .then((r) => r.json())
    .then((data) => {
      const postUpdate = cart.map((cartItem) => {
        if (cartItem.id === item.id) {
          return data 
        } else {
          return cartItem
        }
      })
      setCart(postUpdate)
    })
  }


  function handleToken(token) {
    setLoadCont(true)
    const charge = {token: token.id}
    fetch('/charges', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({
        charge: charge,
        price: ((subTotal * 1.0875).toFixed(2) * 100)
      })
    })
      .then((res) => {
        if (res.ok) {
          res.json()
          .then(() => {
            setCart([])
            setSubTotal(0)
            setLoadCont(false)
            setPaymentSuccess(true)
            setTimeout(() => {
              setLoadCont(false)
              setPaymentSuccess(false)
            }, 10000)
            const configObj = {
              total: parseFloat((subTotal * 1.0875).toFixed(2)), 
              user_id: user.id,
              status: "new"
            }
            fetch('/orders', {
              method: 'POST',
              headers: {
                'Content-Type' : 'application/json'
              },
              body: JSON.stringify(configObj),
            })
            .then((r) => r.json())
            .then((data) => {
              const userOrderItems = cart.map((item) => {
                return {
                  order_id: data.id,
                  product_id: item.product_id,
                  quantity: item.quantity,
                }
              })
              const clearCart = (() => {
                cart.map((item) => {
                  fetch(`/cart_items/${item.id}`, {
                    method: "DELETE"
                  })
               })
              })()
              const orderItems = (() => {
                userOrderItems.map((item) => {
                  fetch('/order_items', {
                    method: 'POST',
                    headers: {
                      'Content-Type' : 'application/json'
                    },
                    body: JSON.stringify(item),
                  })
                  .then((r) => r.json())
                  .then((data) => console.log("2", data))
               })
              })()
              return orderItems
            })
          })
        }
      })
  }

  function onLogout() {
    return history.push("/login")
  }

  function handleProductClick(product) {
    setRouteFormat(product.name.replace(/\s+/g, '-').toLowerCase())
    setSelectedProduct(product)
    history.push(`/shop/${product.name.replace(/\s+/g, '-').toLowerCase()}`)
  }

  return (
    <AppCont>
      <Switch>
        <Route exact path='/admin/backend'>
          <Backend handleBackLogout={handleBackLogout} setProducts={setProducts} products={products} whiteNav={whiteNav}/>
        </Route>
        <Route exact path='/admin'>
          <AdminLogin />
        </Route>
        <Route exact path='/checkout'>
          <Checkout  setLoadCont={setLoadCont} setPaymentSuccess={setPaymentSuccess} loadCont={loadCont} paymentSuccess={paymentSuccess} setWhiteNav={setWhiteNav} setCategory={setCategory} handleItemDelete={handleItemDelete} setSubTotal={setSubTotal} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} whiteNav={whiteNav} handleToken={handleToken} />
        </Route>
        <Route exact path={`/shop/${routeFormat}`}>
          <Product productReviews={productReviews} setProductReviews={setProductReviews} setRouteFormat={setRouteFormat} handleAddReview={handleAddReview} setSubTotal={setSubTotal} headerText={headerText} setHeaderText={setHeaderText} checkoutLogout={checkoutLogout} setCheckoutLogout={setCheckoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} handleAddToCart={handleAddToCart} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} setCategory={setCategory} selectedProduct={selectedProduct} whiteNav={whiteNav} setWhiteNav={setWhiteNav}/>
        </Route>
        <Route exact path={`/shop/${category}`}>
          <Category setHeaderText={setHeaderText}  setCheckoutLogout={setCheckoutLogout} setSubTotal={setSubTotal} headerText={headerText} checkoutLogout={checkoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen}  handleProductClick={handleProductClick} category={category} setCategory={setCategory} whiteNav={whiteNav} setWhiteNav={setWhiteNav} products={products} onLogout={onLogout} />
        </Route>
        <Route exact path='/welcome'>
          <AccountAccess setHeaderText={setHeaderText} setCheckoutLogout={setCheckoutLogout} setIsAuthenticated={setIsAuthenticated}/>
        </Route>
        <Route exact path='/home'>
          <Home setHeaderText={setHeaderText} setCheckoutLogout={setCheckoutLogout} setSubTotal={setSubTotal} headerText={headerText} checkoutLogout={checkoutLogout} handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen}  handleProductClick={handleProductClick} category={category} setCategory={setCategory} whiteNav={whiteNav} setWhiteNav={setWhiteNav} products={products} onLogout={onLogout} />
        </Route>
      </Switch>
    </AppCont>
  )
}

const AppCont = styled.div`
  text-align: center;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

export default App
