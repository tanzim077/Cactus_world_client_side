import React from 'react';
import './SingleReview.css';

const SingleReview = (props) => {
    const { _id, name, email, photoURL, review } = props.singledata;
    
    return (
        <div class="team-boxed row people">
            <div className="col-md-6 col-lg-12 item">
                <div className="box">
                    {photoURL ?
                        <img className="rounded-circle" alt="img" src={photoURL} />
                        :
                        <img className="rounded-circle" alt="img" src="https://png.pngtree.com/png-vector/20190710/ourmid/pngtree-user-vector-avatar-png-image_1541962.jpg" />
                    }
                    <h3 className="name">{name}</h3>
                    <p className="description">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default SingleReview;