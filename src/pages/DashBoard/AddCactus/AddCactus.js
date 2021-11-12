import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import { useHistory } from 'react-router';

const AddCactus = () => {
    const { register, handleSubmit, watch, reset, formState: { errors } } = useForm();

    const history = useHistory();


    useEffect(() => {
        axios.get('http://localhost:8080/items')
    }, [])

    const onSubmit = data => {
        axios.post('http://localhost:8080/items/create', data)
            .then(alert("Inserted successfully"))
            .then(() => {
                reset();
                history.push('/items')
            })

    }

    return (
        <div className="px-5">
            <div style={{ width: '100%' }}>
                <h1 className="text-center">Add a Cactus</h1>
                <div className="container p-4 ">
                    <form className="col-lg-12 d-flex mx-auto flex-column gap-2" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Item Name </label>
                            <div className="col-sm-8 ">
                                <input className="form-control" placeholder="Item Name" {...register("itemName", { required: true })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> ImageURL </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="ImageURL" {...register("image", { required: true })} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Item Price </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="Item Price" {...register("price", { required: true })} />
                            </div>
                        </div>


                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Description </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="description" {...register("description", { required: false })} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-4 col-form-label"> Origin </label>
                            <div className="col-sm-8">
                                <input className="form-control" placeholder="Origin" {...register("origin", { required: false })} />
                            </div>
                        </div>

                        {errors.exampleRequired && <span className="text-danger">This field is required</span>}
                        <Button className="" variant="primary" type="submit">Add</Button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCactus