import axios from 'axios';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);

    const emailHandle = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        const user = { email };
        axios.put('http://localhost:8080/users/admin', user)
            .then(data => {
                if (data.data.modifiedCount) {
                    setEmail('');
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <div className="container px-5  py-5 ">
                <h1>Make an Admin </h1>
                <form onSubmit={handleAdminSubmit}>
                    <input onBlur={emailHandle} type="email" name="" id="" />
                    <button type="submit">Make Admin</button>
                </form>
                {success && <h1>Admin Added</h1>}
            </div>
        </div>
    );
};

export default MakeAdmin;