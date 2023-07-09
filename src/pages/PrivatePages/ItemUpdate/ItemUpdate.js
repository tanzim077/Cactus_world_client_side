import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useParams } from "react-router-dom";

const ItemUpdate = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:8080/items/${id}`).then(function (response) {
      setItem(response.data);
    });
  }, [id]);

  const nameChange = (e) => {
    const updateName = e.target.value;
    const updateItem = { ...item };
    updateItem.itemName = updateName;
    setItem(updateItem);
  };

  const imageChange = (e) => {
    const updateImage = e.target.value;
    const updateItem = { ...item };
    updateItem.image = updateImage;
    setItem(updateItem);
  };

  const priceChange = (e) => {
    const updatePrice = e.target.value;
    const updateItem = { ...item };
    updateItem.price = updatePrice;
    setItem(updateItem);
  };

  const descriptionChange = (e) => {
    const updateDescription = e.target.value;
    const updateItem = { ...item };
    updateItem.description = updateDescription;
    setItem(updateItem);
  };
  const originChange = (e) => {
    const updateOrigin = e.target.value;
    const updateItem = { ...item };
    updateItem.origin = updateOrigin;
    setItem(updateItem);
  };

  const handleUpdate = (data) => {
    axios
      .put(`http://localhost:8080/items/${id}`, item)
      .then((res) => alert("Update Successfully"))
      .then(setItem({}))
      .then(() => history.push("/itemslist"));
    data.preventDefault();
  };

  return (
    <div className="container p-4 ">
      <form
        className="col-lg-6 d-flex mx-auto flex-column gap-2"
        onSubmit={handleUpdate}
      >
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Event Name
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              onChange={nameChange}
              type="text"
              value={item.itemName || ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Image URL
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              onChange={imageChange}
              type="text"
              value={item.image || ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Cost
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              onChange={priceChange}
              type="number"
              value={item.price || ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Description
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              onChange={descriptionChange}
              type="text"
              value={item.description || ""}
            />
          </div>
        </div>
        <div className="form-group row">
          <label for="staticEmail" className="col-sm-4 col-form-label">
            Extra /Tag
          </label>
          <div className="col-sm-8">
            <input
              className="form-control"
              onChange={originChange}
              type="text"
              value={item.origin || ""}
            />
          </div>
        </div>

        <Button className="" variant="primary" type="submit">
          Update
        </Button>
      </form>
    </div>
  );
};

export default ItemUpdate;
