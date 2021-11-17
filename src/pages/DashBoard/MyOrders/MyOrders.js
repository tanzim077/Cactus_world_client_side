import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useOrdersData from '../../../hooks/useOrdersData';
import useAuth from '../../../hooks/useAuth';


const MyOrders = () => {
    const [data, setData] = useOrdersData([]);

    const { user } = useAuth();
    const userMail = user.email;

    var i = 0;


    const myOrder = data.filter(d => d.userEmail == userMail)


    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            axios.delete(`https://mighty-crag-94651.herokuapp.com/orders/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingOrders = data.filter(d => d._id !== id)
                        setData(remainingOrders);
                    }
                })
        }
    }
    return (
        <div className="container-fluid">
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Payment</th>
                        <th>Status</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody>
                    {
                        myOrder.map(d =>
                            <tr>
                                <td>{++i}</td>
                                <td>{d.userName}</td>
                                <td>{d.userEmail}</td>
                                <td>{d.userPhone}</td>
                                <td>{d.userAddress}</td>
                                <td>{d.itemName}</td>
                                <td>{d.price}</td>
                                <td>{d.payment}</td>
                                {
                                    (d.userStatus === "pending") ?
                                        <td>Pending</td> :
                                        <td>Shipped</td>
                                }
                                <td>
                                    <Link to={`/orderupdate/${d._id}`}><Button variant="warning">Update</Button></Link>
                                </td>
                                <td><Button onClick={() => handleDelete(d._id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default MyOrders;

