import axios from 'axios';
import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useItemsData from '../../../hooks/useItemsData';
import './ItemList.css';

const ItemsList = () => {
    const [data, setData] = useItemsData([]);

    var i = 1;

    const handleDelete = (id) => {
        const proceed = window.confirm("Are you sure to delete?")
        if (proceed) {
            axios.delete(`http://localhost:8080/items/${id}`)
                .then(res => {
                    if (res.data.deletedCount > 0) {
                        const remainingItem = data.filter(m => m._id !== id)
                        setData(remainingItem);
                    }
                })
        }
    }

    return (
        <div>
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>SL.</th>
                        <th>Item Name</th>
                        <th>Price</th>
                        <th>Origin</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>

                    </tr>
                </thead>
                <tbody className="custom-table">
                    {
                        data.map(e =>
                            <tr>
                                <td>{i++}</td>
                                <td>{e.itemName}</td>
                                <td>{e.price}</td>
                                <td>{e.origin}</td>
                                <td><img className="img-thumbnail" src={e.image} alt="" /></td>
                                <td>
                                    <Link to={`/itemupdate/${e._id}`}><Button variant="warning">Update</Button></Link>
                                </td>
                                <td><Button onClick={() => handleDelete(e._id)} variant="danger">Delete</Button></td>
                            </tr>
                        )
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ItemsList;