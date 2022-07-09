import {React, useEffect, useReducer, useState} from "react";
import ReactDOM from "react-dom";
import StripeCheckout from "react-stripe-checkout";
import { toast } from "react-toastify";
import './App.css'
import Checkout from './CheckoutPage/Checkout.js'

function App() {
  const [user, setUser] = useState([])
  const [errors, setErrors] = useState([]);
  const [product, setProduct] = useState([])
  const [order, setOrder] = useState([])

  useEffect(() => {
    const loginObj = {
      email: 'phillup.zukowski@gmail.com',
      password: 'password'
    }
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginObj),
    }).then((r) => {
      if (r.ok) {
        r.json()
        .then((user) => {
          setUser(user)
        })
      } else {
        r.json().then((err) => setErrors(err.errors))
      }
    })
  }, [])

  useEffect(() => {
    fetch('orders/1')
    .then((r) => r.json())
    .then((data) => setOrder(data))
  }, [])

  useEffect(() => {
    fetch('products/1')
    .then((r) => r.json())
    .then((data) => setProduct(data))
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

  return (
    <div className="container">
      <Checkout handleToken={handleToken} />
    </div>
  );
}

export default App
