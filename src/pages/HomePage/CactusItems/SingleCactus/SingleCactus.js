import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SingleEvent.css'

const SingleCactus = (props) => {
    const { _id, eventName, image, from, destination, description, cost, start_date, end_date } = props.singledata;

    return (
        <div className=" eventName col-lg-4 p-2">
            <Card className="p-2" style={{ width: '22rem', height: '30em' }}>
                <Card.Img style={{ width: '100%', height: '12rem' }} src={image} />
                <Card.Body>
                    <Card.Title className="big">{eventName}</Card.Title>
                    <Card.Text className="small" ><i class="fas event-icon fa-map-marker-alt"></i> &nbsp; {from} to {destination} &nbsp; <i class="fas event-icon fa-flag-checkered"></i></Card.Text>
                    <Card.Text><i class="far event-icon fa-calendar-alt"></i>  &nbsp; {start_date} to  {end_date}</Card.Text>
                    <Card.Text className="description">{description.slice(0, 100)}....</Card.Text>
                    <div className="d-flex justify-content-between">
                        <Link to={`/eventdetails/${_id}`}><Button className="confirm"><i class="fas event-icon fa-calendar-plus">&nbsp;</i> Confirm Schedule</Button></Link>
                        <Card.Text className="cost my-auto"> <h4>{cost} ৳</h4> </Card.Text>

                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleCactus;