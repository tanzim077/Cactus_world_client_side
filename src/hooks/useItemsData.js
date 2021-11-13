import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useItemsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://shrouded-sierra-03069.herokuapp.com/items')
            .then(result => {
                setData(result.data.items);
            })
    }, [])

    return [data, setData];
};

export default useItemsData;