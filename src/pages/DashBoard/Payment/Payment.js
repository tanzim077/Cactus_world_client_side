import React, { useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import useOrdersData from '../../../hooks/useOrdersData';
import { Table } from 'react-bootstrap';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51HtZdRICE77qSyli3nggZHaVqKg5sibbLd6SB3ym1iEBpwn8Rer3fMyC1HIyQJN94sEgnbZ6TYsGJ8nVg29doaz100HOpLWVg2');
const Payment = () => {
    const [data, setData] = useOrdersData([]);
    const [totalAmount, setTotalAmount] = React.useState(0);

    const { user } = useAuth();
    const userMail = user.email;
    const myOrder = data.filter(d => d.userEmail === userMail && d.payment === 'pending');

    console.log(myOrder);

    useEffect(() => {
        let sum = 0;
        myOrder.map(d => sum += parseInt(d.price));
        setTotalAmount(sum);
    }, [myOrder])

    let i = 0;
    console.log(totalAmount)

    return (
        <div className="container-fluid px-5 py-5">
            <h2 className='text-success'>Payment System is coming soon</h2>
            <h2>Total Item orders :  {myOrder.length}</h2>
            <h3>Total Amount: {totalAmount}</h3>

            <div className="d-flex">
                <div className="container">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Payment</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                myOrder.map(d =>
                                    <tr>
                                        <td>{++i}</td>
                                        <td>{d.itemName}</td>
                                        <td>{d.price}</td>
                                        <td>{d.payment}</td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </Table>
                </div>
                <div className="container">
                    {
                        totalAmount > 0 &&
                        <Elements stripe={stripePromise}>
                            <CheckoutForm myOrder={myOrder} totalAmount={totalAmount} />
                        </Elements>
                    }
                </div>
            </div>
        </div>
    );
};

export default Payment;