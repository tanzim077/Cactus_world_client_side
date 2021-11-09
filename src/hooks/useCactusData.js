import axios from 'axios';
import React, { useEffect, useState } from 'react';

const useCactusData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('')
            .then(result => {
                setData(result.data.cactuses);
            })
    }, [])

    return [data, setData];
};

export default useCactusData;