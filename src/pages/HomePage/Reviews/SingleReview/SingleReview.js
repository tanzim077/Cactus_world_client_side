import React from 'react';
import './SingleReview.css';
import Rating from 'react-rating';

const SingleReview = (props) => {
    const { _id, name, email, photoURL, rating, review } = props.singledata;
    
    return (
        <div class="team-boxed row people">
            <div className="col-md-6 col-lg-12 item">
                <div className="box">
                    {photoURL ?
                        <img className="review-image rounded-circle" alt="img" src={photoURL} />
                        :
                        <img className="review-image rounded-circle" alt="img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
                    }
                    <h3 className="name">{name}</h3>
                    <div className="star">
                    <Rating
                        emptySymbol="far fa-star"
                        fullSymbol="fas fa-star"
                        initialRating={rating}
                        readonly
                    />
                    </div>
                    <p className="description">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;