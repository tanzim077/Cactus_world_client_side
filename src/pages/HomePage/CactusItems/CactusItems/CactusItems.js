import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useCactusData from '../../../../hooks/useCactusData';
import SingleCactus from '../SingleCactus/SingleCactus';

const CactusItems = () => {
    
    const [data] = useCactusData();
    const displaydata = data.slice(0, 6);


    return (
        <div className="container mx-auto row py-5 text-center" >
            <h1>All Upcoming Events </h1>
            {
                displaydata.map(singledata => <SingleCactus key={singledata.id} singledata={singledata}></SingleCactus>)
            }
            <Link to='/events'><Button variant="warning">See All</Button></Link>
        </div>
    );
};

export default CactusItems;