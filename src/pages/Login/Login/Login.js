import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import OtherButtons from '../../Shared/OtherButtons/OtherButtons';

const LogIn = () => {
    const { loginUser, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/home';
    const [loginData, setLoginData] = useState({});

    // const handleLogin = (e) => {
    //     e.preventDefault();
    //     const auth = getAuth();
    //     signInWithEmailAndPassword(auth, email, password)
    //         .then((userCredential) => {
    //             const user = userCredential.user;
    //             history.push(redirect_URL);
    //         })
    //         .catch((error) => {
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             setError(errorMessage)
    //         });
    // }

    const emailHandle = e => {
        const newLoginData = { ...loginData };
        newLoginData.email = e.target.value
        setLoginData(newLoginData);
    }

    const passwordHandle = p => {
        const newLoginData = { ...loginData };
        newLoginData.password = p.target.value
        setLoginData(newLoginData);
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (
        <div>
            <MenuBar/>
            <div className="mx-3 myform">
                <form onSubmit={handleLogin}>
                    <div className="col-lg-3 mx-auto myform">
                        <h3 className="text-center">Log In</h3>

                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={emailHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={passwordHandle} className="form-control" id="exampleInputPassword1" />
                            <p className="text-danger">{error}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="btn btn-primary text-center">Log In</button>
                        </div>
                        <br /><br />
                        <h5>Not a User? <Link to='/signup'>Register here</Link></h5>
                        <OtherButtons method="Log In"></OtherButtons>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LogIn;