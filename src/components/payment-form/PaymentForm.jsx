import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectCartTotal } from '../../store/cart/cart.selector';
import { selectCurrentUser } from '../../store/user/user.selector';
import { BUTTON_TYPE_CLASSES } from '../button/Button';
import {
  FormConatiner,
  PaymentButton,
  PaymentFormContainer,
} from './PaymentForm.styles';

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessing, setIsProcessing] = useState(false);

  const paymentHandler = async (e) => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    setIsProcessing(true);

    const response = await fetch('/.netlify/functions/create-payment-intent', {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }),
    }).then((res) => res.json());

    const {
      paymentIntent: { client_secret },
    } = response;

    const paymentResult = await stripe.confirmCardPayment(client_secret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser ? currentUser.displayName : 'Guest',
        },
      },
    });

    setIsProcessing(false);

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
        <PaymentButton
          type="submit"
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          isLoading={isProcessing}
        >
          Pay now
        </PaymentButton>
      </FormConatiner>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
