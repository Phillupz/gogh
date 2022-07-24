import {React, useEffect, useState} from "react";
import { Switch, useHistory, Route} from "react-router-dom"
import styled from 'styled-components'
import { toast } from "react-toastify";
import './App.css'
import Checkout from './CheckoutPage/Checkout.js'
import AccountAccess from './AccountAccess/LoginForm.js'
import Category from './CategoryPage/Category.js'
import Product from './ProductPage/Product.js'
import AdminLogin from './Backend/AdminLogin.js'
import Backend from './Backend/Backend.js'
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "./Redux/userSlice"

const AppCont = styled.div`
  text-align: center;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  const history = useHistory()
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
  const [orderIntents, setOrderIntents] = useState([])
  const [userOrderIntent, setUserOrderIntent] = useState([])
  const [userOrderItems, setUserOrderItems] = useState([])
  const [paymentSuccess, setPaymentSuccess] = useState(false)
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.value)

  function handleLogout() {
    fetch('/logout', {
      method:'DELETE'
  }).then(() => {
    dispatch(logout(user))
    setIsPaneOpen(false)
    setCart([])
    setSubTotal(0)
  })
  }

  useEffect(() => {
    if (cart) 
      return setSubTotal(cart.reduce((total, item)=>total + (item.product.price * item.quantity),0))
  })

  function handleCheckout(subTotal){   
    history.push('/checkout')
  }
  
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

  function handleItemDelete(item){
    fetch(`/cart_items/${item.id}`, {
      method: "DELETE"
    })
    const postDelete = cart.filter((cartItem) => {
      return cartItem.id !== item.id
    })
    setCart(postDelete)
  }

  function handleAddToCart() {
    if (!user) {
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
    setSubTotal(subTotal + item.product.price)
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
    setSubTotal(cart.reduce((total, item)=>total + (item.product.price * item.quantity),0))
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

  useEffect(() => {
    fetch('/orders/1')
    .then((r) => r.json())
    .then((data) => setOrder(data))
  }, [])

  useEffect(() => {
    fetch('/products')
    .then((r) => r.json())
    .then((data) => setProducts(data))
  }, [])

  function handleToken(token) {
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
            setPaymentSuccess(true)
            const configObj = {
              total: (subTotal * 1.0875).toFixed(2), 
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
          <Backend products={products} whiteNav={whiteNav}/>
        </Route>
        <Route exact path='/admin'>
          <AdminLogin />
        </Route>
        <Route exact path='/checkout'>
          <Checkout paymentSuccess={paymentSuccess} setWhiteNav={setWhiteNav} setCategory={setCategory} handleItemDelete={handleItemDelete} setSubTotal={setSubTotal} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} whiteNav={whiteNav} handleToken={handleToken} />
        </Route>
        <Route exact path={`/shop/${routeFormat}`}>
          <Product handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} setSubTotal={setSubTotal} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} handleAddToCart={handleAddToCart} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen} setCategory={setCategory} selectedProduct={selectedProduct} whiteNav={whiteNav} setWhiteNav={setWhiteNav}/>
        </Route>
        <Route exact path={`/shop/${category}`}>
          <Category handleLogout={handleLogout} handleCheckout={handleCheckout} handleItemDelete={handleItemDelete} setSubTotal={setSubTotal} subTotal={subTotal} handleAdd={handleAdd} handleSubtract={handleSubtract} cart={cart} setCart={setCart} isPaneOpen={isPaneOpen} setIsPaneOpen={setIsPaneOpen}  handleProductClick={handleProductClick} category={category} setCategory={setCategory} whiteNav={whiteNav} setWhiteNav={setWhiteNav} products={products} onLogout={onLogout} />
        </Route>
        <Route exact path='/welcome'>
          <AccountAccess setIsAuthenticated={setIsAuthenticated}/>
        </Route>
      </Switch>
    </AppCont>
  )
}

export default App
