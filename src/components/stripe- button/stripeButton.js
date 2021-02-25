import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

import { ReactComponent as Logo } from '../../assets/logo.svg';


const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51IOjb7Jqm0ArOpaRNftUVmzg1FTBltDpYG8ZSBpIHvDV6DN4wWmcBdC80GnuVpioNYMpn9m9Mum6HInfkZlBmpFo005J9I1Rbh'
    
    const onToken = (token) => {
        console.log('Stripe token is', token);
        alert("Payment Successful!")
    }
    return (
        
        <StripeCheckout 
        label = "Pay Now"
        name = "E-kart Ltd."
        billingAddress
        shippingAddress
        // image = {Logo}
        description = {`Your total is $${price}`}
        amount = {priceForStripe}
        panelLabel = "Pay Now"
        token = {onToken}
        stripeKey = {publishableKey}
        />
    )
}


export default StripeCheckoutButton;