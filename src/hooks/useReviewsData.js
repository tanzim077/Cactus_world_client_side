import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useReviewsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/reviews')
            .then(result => {
                setData(result.data.reviews);
            })
    }, [])

    return [data, setData];
};

export default useReviewsData;