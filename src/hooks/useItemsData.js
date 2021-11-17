import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useItemsData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://mighty-crag-94651.herokuapp.com/items')
            .then(result => {
                setData(result.data.items);
            })
    }, [])

    return [data, setData];
};

export default useItemsData;