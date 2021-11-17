import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const emailHandle = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        axios.put('https://mighty-crag-94651.herokuapp.com/users/admin', user)
            .then(data => {
                if (data.data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
                else {
                    setEmail('');
                    alert("User Not found")
                    window.location.reload();
                }
            })
        setEmail('');
        e.preventDefault()
    }
    return (
        <div className="container-fluid">
            <div className="container px-5 py-5" style={{ width: '100%' }}>
                <h1>Make an Admin </h1>
                <form onSubmit={handleAdminSubmit}>
                    <input onBlur={emailHandle} className="form-control" style={{ width: '70%', display: 'inline' }} type="email" name="" id="" />
                    &nbsp;&nbsp;
                    <Button variant="success" type="submit">Make Admin</Button>
                </form>
                {success && <h1>Admin Added</h1>}
            </div>
        </div>
    );
};

export default MakeAdmin;