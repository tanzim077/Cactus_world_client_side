import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import useOrdersData from '../../../hooks/useOrdersData';
const OrdersList = () => {
    const [data, setData] = useOrdersData([]);

    var i = 0;

    const handleStatus = (id) => {
        const remainingData = data.find(d => d._id === id)
        const { _id, ...newData } = remainingData;
        axios.put(`https://mighty-crag-94651.herokuapp.com/orders/status/${id}`, newData)
            .then(res => alert("Schedule Status Updated Successfully"))
            .then(() => window.location.reload())
    }

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
            <div >
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
                            <th>Item Image</th>
                            <th>Booked At</th>
                            <th>Status</th>
                            <th>Delete</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map(d =>
                                <tr>
                                    <td>{++i}</td>
                                    <td>{d.userName}</td>
                                    <td>{d.userEmail}</td>
                                    <td>{d.userPhone}</td>
                                    <td>{d.userAddress}</td>
                                    <td>{d.itemName}</td>
                                    <td>{d.price}</td>
                                    <td><img className="img-thumbnail" src={d.image} alt="" /></td>
                                    <td>{d.bookedDate}</td>
                                    <td>
                                        {

                                            (d.userStatus === "pending") ?
                                                <Button onClick={() => handleStatus(d._id)} variant="info">Shipped 🚛</Button>
                                                :
                                                <Button onClick={() => handleStatus(d._id)} variant="warning">Processing ⏳️</Button>
                                        }

                                    </td>
                                    <td><Button onClick={() => handleDelete(d._id)} variant="danger">Delete</Button></td>
                                </tr>
                            )
                        }
                    </tbody>
                </Table>
            </div >
        </div >
    );
};

export default OrdersList;