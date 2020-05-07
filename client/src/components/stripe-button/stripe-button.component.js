import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios'

const StripeCheckoutButton =({price})=>{
    const priceForStripe = price * 100;
    const publishableKey ='pk_test_cyKAOTbZ5KJOygSpWEpc0atl'

  let  onTocken = token=>{
       axios({
           url:'payment',
           method:'post',
           data:{
               amout:priceForStripe,
               token
           }
       }).then(response=>{
           alert('Payment successful')
       }).catch(error=>{
           console.log('Payment error: ', JSON.parse(error))
           alert(
               'There was an issue with your payment. Please sure the provided credit'
           )
       })
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