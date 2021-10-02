import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51Jfa8yCmoCeiHfh7WESMfqW8dZ2QcFFAly1G8iUdgxQSzYL1KAQDYve3XUVVNDSJ4vr4AigLY4vMv3CokCqBtpKJ00qgb9nFKa';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='.Stigma Clothing'
      billingAddress
      shippingAddress
      image=''
      description={`Your total is €{price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
