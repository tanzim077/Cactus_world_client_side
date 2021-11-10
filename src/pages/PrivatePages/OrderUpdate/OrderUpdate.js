import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Button } from 'react-bootstrap';

const OrderUpdate = () => {
    const [order, setOrder] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:8080/orders/${id}`)
            .then(function (response) {
                setOrder(response.data);

            })
    }, [])

    const history = useHistory();

    const nameChange = e => {
        const updateName = e.target.value;
        const updateOrder = { ...order }
        updateOrder.userName = updateName;
        setOrder(updateOrder);
    }

    const emailChange = e => {
        const updateEmail = e.target.value;
        const updateOrder = { ...order }
        updateOrder.userEmail = updateEmail;
        setOrder(updateOrder);
    }

    const phoneChange = e => {
        const updatePhone = e.target.value;
        const updateOrder = { ...order }
        updateOrder.userPhone = updatePhone;
        setOrder(updateOrder);
    }

    const addressChange = e => {
        const updateAddress = e.target.value;
        const updateOrder = { ...order }
        updateOrder.userAddress = updateAddress;
        setOrder(updateOrder);
    }


    const handleUpdate = (data) => {
        axios.put(`http://localhost:8080/orders/${id}`, order)
            .then(res => alert("Update Successfully"))
            .then(setOrder({}))
            .then(() => history.push('/myorder'))
        data.preventDefault();
    }

    return (
        <div className="container p-4 ">
            <form className="col-lg-6 d-flex mx-auto flex-column gap-2" onSubmit={handleUpdate}>

                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Name</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={nameChange} type="text" value={order.userName || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Email</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={emailChange} type="text" value={order.userEmail || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Phone</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={phoneChange} type="text" value={order.userPhone || ''} />
                    </div>
                </div>
                <div className="form-group row">
                    <label for="staticEmail" className="col-sm-4 col-form-label">Address</label>
                    <div className="col-sm-8">
                        <input className="form-control" onChange={addressChange} type="text" value={order.userAddress || ''} />
                    </div>
                </div>
                <Button className="" variant="primary" type="submit">Update</Button>
            </form>

        </div>
    );
};

export default OrderUpdate;