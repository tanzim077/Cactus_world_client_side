import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleCactus.css';

const SingleCactus = (props) => {
    const { _id, itemName, image, price, origin, description } = props.singledata;

    return (
        <div className="container col-lg-4" style={{ margin: "25px 0" }}>
            <div className="">
                <div className="card-sl">
                    <div className="card-image">
                        <img style={{ width: '100%', height: '16rem' }} src={image} />
                    </div>

                    <a className="card-action" href="#"><i className="fa fa-heart"></i></a>
                    <div className="card-heading">
                        {itemName}
                    </div>
                    <div className="card-text">
                        {origin}
                    </div>
                    <div className="card-text">
                        {description}
                    </div>
                    <div className="card-text">
                        {price}
                    </div>
                    <Link to={`/itemdetails/${_id}`}><a href="#" className="card-button"> Purchase</a></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleCactus;