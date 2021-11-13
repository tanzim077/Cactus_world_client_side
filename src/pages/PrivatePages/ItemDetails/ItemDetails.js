import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link, useHistory, useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import './ItemDetails.css';

const ItemDetails = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();
    const { id } = useParams();
    const { user } = useAuth();
    const history = useHistory();
    const [item, setItem] = useState({});

    const { price, description, itemName, image, origin } = item;
    const userStatus = "pending";
    
    const date = new Date();
    const bookedDate = date.toLocaleDateString();
    
    const onSubmit = (data) => {
        const orderData = { ...data, bookedDate, userStatus, price, description, itemName, image, origin }
        orderData.bookedDate = bookedDate;
        axios.post('http://localhost:8080/orders/create', orderData)
            .then(alert("Inserted successfully"))
            .then(history.push('/items'))
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/items/${id}`)
            .then(function (response) {
                setItem(response.data);
            })
    }, [])

    return (
        <>
            <MenuBar />
            <div className="container d-lg-flex pt-2">
                <div className="card col-lg-6 ">
                    <h5 className="item-title">{itemName}</h5>

                    <div className="card-header gap-3 justify-content-between">
                        <div className="card-title-group">
                            <h3 className="card-title">Price : {price} ৳ </h3>
                            <h5 className="card-subtitle pt-2"><span className="custom-1">Origin : {origin} </span></h5>
                        </div>
                    </div>

                    <img className="item-image" src={image} alt="Logo" />
                    <div className="card-text">{description}</div>

                </div>
                <div className="container pt-5">
                    <form className="col-lg-10 d-flex mx-auto flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Name </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="User Name" defaultValue={user.displayName} {...register("userName", { required: false })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Email </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="User Email" defaultValue={user.email} {...register("userEmail", { required: false })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Phone no</label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="User Phone" {...register("userPhone", { required: false })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Address</label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="Address"  {...register("userAddress", { required: false })} />
                            </div>
                        </div>

                        {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                        <Button className="" variant="primary" type="submit">Confirm your order</Button>

                    </form>
                </div>
            </div >
        </>

    );
};

export default ItemDetails;