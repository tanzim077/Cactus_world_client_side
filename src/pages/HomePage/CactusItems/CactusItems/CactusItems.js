import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItemsData from '../../../../hooks/useItemsData';
import SingleCactus from '../SingleCactus/SingleCactus';

const CactusItems = () => {
    
    const [data] = useItemsData();
    const displaydata = data.slice(0, 6);
    return (
        <div className="container mx-auto row py-5 text-center" >
            <h1>All Cactus Items </h1>
            {
                displaydata.map(singledata => <SingleCactus key={singledata._id} singledata={singledata}></SingleCactus>)
            }
            <Link to='/items'><Button style={{width: '30%'}} variant="info">See All</Button></Link>
        </div>
    );
};

export default CactusItems;