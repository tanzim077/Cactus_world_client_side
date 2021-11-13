import axios from 'axios';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
import Rating from 'react-rating';
import './Review.css';
import { useHistory } from 'react-router';
import ReactStars from "react-rating-stars-component";

const Review = () => {

    const [review, setReview] = useState('')
    const { user } = useAuth();
    const { displayName, email, photoURL } = user;
    const [rating, setRating] = useState(0);

    const history = useHistory();

    const reviewHandle = e => {
        const newData = {};
        newData.name = displayName;
        newData.email = email;
        newData.photoURL = photoURL;
        newData.rating = rating;
        newData.review = e.target.value
        setReview(newData);
    }

    const handleReview = (e) => {
        axios.post('https://shrouded-sierra-03069.herokuapp.com/reviews/create', review)
            .then(alert("Inserted successfully"))
            .then(() => {
                history.push('/dashboard')
            })
        e.preventDefault();
    }
    const ratingChanged = (newRating) => {
        setRating(newRating);
    };

console.log(rating);

    return (
        <div className="container-fluid">
            <form onSubmit={handleReview} className="pt-4 col-lg-7 d-flex flex-column ">
                
                

                <div className="mb-3 d-flex gap-4">
                    <label htmlFor="exampleInputName1" className="form-label">Give Rating</label>
                    <InputGroup className="star">
                        <ReactStars
                            count={5}
                            onChange={ratingChanged}
                            size={34}
                            activeColor="#e84810"
                        />
                    </InputGroup>
                </div>
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