import { React } from 'react'
import CheckoutButton from './CheckoutButton.js'

function Checkout({handleToken}) {
  return (
    <CheckoutButton handleToken={handleToken}/>
  )
}

export default Checkout