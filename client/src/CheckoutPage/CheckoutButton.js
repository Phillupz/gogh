import {React, useState} from "react";
import StripeCheckout from "react-stripe-checkout"
import { useSelector } from "react-redux";


function CheckoutButton({subTotal, cart, handleToken}) {
  const user = useSelector((state) => state.user.value)
  const [order, setOrder] = useState([])

  console.log(cart)

  function onToken(token) {
    handleToken(token)
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_51LJKDfBHzhSt4KExvhNHxX1m8lz7ZKLe2SgVfEDUoCKlXYc5KfftIRM5ruslz2AYfjuD6EVwMd5VhA4PGS8ihQVX00uw7hdYCV"
        token={onToken}
        buttonColor={"black"}
        billingAddress
        shippingAddress
      />
    </div>
  );
}

export default CheckoutButton
