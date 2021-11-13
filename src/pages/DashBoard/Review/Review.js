import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import {Button, FormControl, InputGroup} from 'react-bootstrap';

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
        <div className="container-fluid">
            <form onSubmit={handleReview} className= "pt-4 col-lg-7 d-flex flex-column ">
                <div className="mb-3 d-flex gap-4">
                    <label htmlFor="exampleInputName1" className="form-label">Review</label>
                    <InputGroup>
                        <FormControl onBlur={reviewHandle} as="textarea" aria-label="With textarea" />
                    </InputGroup>
                </div>
                <div className="d-flex justify-content-center">
                    <Button type="submit" variant="success" className="text-center">Submit</Button>
                </div>
            </form>
        </div>
    );
};

export default Review;