import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import Button, { BUTTON_TYPE_CLASSES } from '../button/Button';
import { FormConatiner, PaymentFormContainer } from './PaymentForm.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: 10000 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: 'Tanvir Chowdhury',
        },
      },
    });

    if (paymentResult.error) {
      alert(paymentResult.error);
    } else {
      if (paymentResult.paymentIntent.status === 'succeeded') {
        alert('Payment Successfull');
      }
    }
  };

  return (
    <PaymentFormContainer>
      <FormConatiner onSubmit={paymentHandler}>
        <h2>Credit Card Payment</h2>
        <CardElement></CardElement>
        <Button
          type="submit"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          style={{ marginTop: '32px' }}
        >
          Pay now
        </Button>
      </FormConatiner>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
