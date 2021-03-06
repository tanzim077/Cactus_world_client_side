import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useReviewsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mighty-crag-94651.herokuapp.com/reviews')
            .then(result => {
                setData(result.data.reviews);
            })
    }, [])

    return [data, setData];
};

export default useReviewsData;