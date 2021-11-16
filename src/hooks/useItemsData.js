import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useItemsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8080/items')
            .then(result => {
                setData(result.data.items);
            })
    }, [])

    return [data, setData];
};

export default useItemsData;