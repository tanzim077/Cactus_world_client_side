import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useOrdersData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://shrouded-sierra-03069.herokuapp.com/orders')
            .then(result => {
                setData(result.data.orders);
            })
    }, [])

    return [data, setData];
};

export default useOrdersData;