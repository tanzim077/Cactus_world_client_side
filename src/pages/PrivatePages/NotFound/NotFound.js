import React from 'react';
import './NotFound.css';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';


const NotFound = () => {
    return (
        <div>
            <div className="d-lg-flex flex-row-reverse pt-5">
                <div className="ps-5 img-fluid col-lg-6  error-img">
                    <img src="https://d2gg9evh47fn9z.cloudfront.net/800px_COLOURBOX28756542.jpg" alt="" />
                </div>

                <div className="container text-center col-lg-6 my-auto  d-flex flex-wrap justify-content-center  align-items-center">
                    <div>
                        <h1 >Sorry Page Not found</h1>
                        <p className="text-center">We are extremely sorry to say that those page is you are looking for not found at this moment. You may entered a false link or this page is under construction. Please keep patience. </p>
                        <h3>Thanks for stay with us </h3>

                    </div>
                    <div className="pt-4">
                        <Link to="/"><Button variant="info">Go to Home</Button></Link>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default NotFound;