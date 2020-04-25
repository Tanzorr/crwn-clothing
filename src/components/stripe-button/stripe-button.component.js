import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_cyKAOTbZ5KJOygSpWEpc0atl'

  let  onTocken = token=>{
        console.log(token)
        alert('Payment Successful')
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name='CROWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel='Pay now'
            token={onTocken}
            stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton