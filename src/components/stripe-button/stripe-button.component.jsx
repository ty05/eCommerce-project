import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) =>{
    const priceForStripe = price*100;
    const publishablekey = "pk_test_WZekI5OGKGrT9hOfDcGXros8";

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`your total is $${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishablekey}
        />

    )
}

export default StripeCheckoutButton;