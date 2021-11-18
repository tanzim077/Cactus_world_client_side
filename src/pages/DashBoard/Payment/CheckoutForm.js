import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Spinner from 'react-bootstrap/Spinner';
import { Button } from 'react-bootstrap';

const CheckoutForm = ({ myOrder, totalAmount }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [processing, setProcessing] = useState(false);
    const { user } = useAuth();
    const [clientSecret, setClientSecret] = useState('');
    const [paymentSuccess, setPaymentSuccess] = useState({});

    const paymentTime = new Date().toLocaleString();
   
    const paymentStatus = () => {     
        myOrder.map(item => {
            const { _id, ...newData } = item;
            axios.put(`https://mighty-crag-94651.herokuapp.com/orders/successpayment/${_id}`, { paymentTime: paymentTime })

        })
    }
    // http://localhost:8080
    // https://mighty-crag-94651.herokuapp.com

    useEffect(() => {
        axios.post('https://mighty-crag-94651.herokuapp.com/create-payment-intent', { totalAmount })
            .then(data => {
                setClientSecret(data.data.clientSecret)
            })
    }, [totalAmount])


    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }
        setProcessing(true);
        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
        }

        // Payment intent
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user.displayName,
                        email: user.email,
                    },
                },
            },
        );

        if (intentError) {
            setError(intentError.message);
            setSuccess('');

        }
        else {
            setError('');
            paymentStatus();
            setSuccess("Payment proceed successfully");
            setProcessing(false);
        }

    };



    return (
        <div>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <br/>
                {processing ? <Spinner animation="border" variant="success" /> :
                    <Button className="form-control" variant='success' type="submit" disabled={!stripe || success}>
                        Pay
                    </Button>
                }
                {/* <button onClick={paymentStatus}>test</button> */}
            </form>
            {error && <h3 className="text-danger">{error}</h3>}
            {success && <h3 className="text-success">{success}</h3>}
        </div>
    );
};

export default CheckoutForm;