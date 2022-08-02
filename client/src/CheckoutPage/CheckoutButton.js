import React from "react";
import StripeCheckout from "react-stripe-checkout"

function CheckoutButton({subTotal, cart, handleToken}) {

  function onToken(token) {
    handleToken(token)
  }

  return (
    <div className="container">
      <StripeCheckout
        stripeKey="pk_test_51LJKDfBHzhSt4KExvhNHxX1m8lz7ZKLe2SgVfEDUoCKlXYc5KfftIRM5ruslz2AYfjuD6EVwMd5VhA4PGS8ihQVX00uw7hdYCV"
        token={onToken}
        buttonColor={"black"}
      />
    </div>
  );
}

export default CheckoutButton
