import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const Review = () => {

    const [review, setReview] = useState('')
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    
    const reviewHandle = e => {
        const newData = {};
        newData.name = displayName;
        newData.email = email;
        newData.photoURL = photoURL;
        newData.review = e.target.value
        setReview(newData);
    }
    
    const handleReview = (e) => {
        axios.post('http://localhost:8080/reviews/create', review)
        e.preventDefault();
    }


    return (
        <div>
            <form onSubmit={handleReview}>
                <div className="mb-3">
                    <label htmlFor="exampleInputName1" className="form-label">Review</label>
                    <input type="text" onBlur={reviewHandle} className="form-control" id="exampleInputName" />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="text-center btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default Review;