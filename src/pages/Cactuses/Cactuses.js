import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItemsData from '../../hooks/useItemsData';
import MenuBar from '../Shared/MenuBar/MenuBar';

const Cactuses = () => {

    const [data] = useItemsData([])

    return (

        <div>
            <MenuBar />

            <div className=" d-flex flex-wrap ">
                {
                    data.map(data =>
                        <div className="container col-lg-4" style={{ margin: "25px 0" }}>
                            <div className="">
                                <div className="card-sl">
                                    <div className="card-image">
                                        <img style={{ width: '100%', height: '16rem' }} src={data.image} />
                                    </div>

                                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                                    <div className="card-heading">
                                        <h3>
                                            {data.itemName}
                                        </h3>
                                    </div>
                                    <div className="card-text">
                                        <h4>{data.origin}</h4>
                                    </div>
                                    <div className="card-text">
                                        {data.description}
                                    </div>
                                    <div className="text-danger card-text">
                                        <h4>{data.price} ৳</h4>
                                    </div>
                                    <Link to={`/itemdetails/${data._id}`}><a href="#" className="card-button"><i class="fab fa-opencart"></i> &nbsp; &nbsp; Purchase</a></Link>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Cactuses;