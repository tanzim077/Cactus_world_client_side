import axios from "axios";
import React, { useEffect, useState } from "react";

const useOrdersData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/orders").then((result) => {
      setData(result.data.orders);
    });
  }, [data]);

  return [data, setData];
};

export default useOrdersData;
