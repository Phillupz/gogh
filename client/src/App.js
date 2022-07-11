import {React, useEffect, useState} from "react";
import { Switch, useHistory, Route} from "react-router-dom"
import styled from 'styled-components'
import { toast } from "react-toastify";
import './App.css'
import Checkout from './CheckoutPage/Checkout.js'
import AccountAccess from './AccountAccess/LoginForm.js'
import Category from './CategoryPage/Category.js'
import Product from './ProductPage/Product.js'

const AppCont = styled.div`
  text-align: center;
  scroll-behavior: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`

function App() {
  const history = useHistory()
  const [user, setUser] = useState([])
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [errors, setErrors] = useState([]);
  const [products, setProducts] = useState([])
  const [order, setOrder] = useState([])
  const [whiteNav, setWhiteNav] = useState(false)

  // useEffect(() => {
  //   fetch('/authorized_user')
  //   .then((res) => {
  //     if (res.ok) {
  //       res.json()
  //       .then((user) => {
  //         setIsAuthenticated(true);
  //         setUser(user)
  //       })
  //     }
  //   })
  // },[])

  useEffect(() => {
    fetch('orders/1')
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
        price: order.total
      })
    })
      .then((r) => r.json())
      .then((data) => console.log("r", data))
  }

  function onLogout() {
    return history.push("/login")
  }

  return (
    <AppCont>
      <Switch>
        <Route exact path='/welcome'>
          <AccountAccess setIsAuthenticated={setIsAuthenticated} setUser={setUser}/>
        </Route>
        <Route exact path='/shop'>
          <Category whiteNav={whiteNav} setWhiteNav={setWhiteNav} products={products} onLogout={onLogout} user={user} />
        </Route>
        <Route exact path='/checkout'>
          <Checkout handleToken={handleToken} />
        </Route>
        <Route exact path='/product'>
          <Product whiteNav={whiteNav} setWhiteNav={setWhiteNav}/>
        </Route>
      </Switch>
    </AppCont>
  )
}

export default App
