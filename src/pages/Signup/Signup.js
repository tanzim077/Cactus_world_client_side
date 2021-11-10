import { createUserWithEmailAndPassword, getAuth, updateProfile } from '@firebase/auth';
import React from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import MenuBar from '../Shared/MenuBar/MenuBar';
import OtherButtons from '../Shared/OtherButtons/OtherButtons';


const Signup = () => {
    const { displayName, error, email, password, nameHandle, emailHandle, passwordHandle, setError } = useAuth()

    const auth = getAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/home';



    const handleSignUp = (e) => {
        e.preventDefault();
        if (password.length < 6) {
            setError("password should be at least 6 characters");
            return false;
        }
        setError('')
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                const user = userCredential.user;
                history.push(redirect_URL)
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            });
    }

    return (
        <div>
            <MenuBar />
            <div className="mx-3">
                <form onSubmit={handleSignUp}>
                    <div className="col-lg-3 mx-auto myform">
                        <h3 className="text-center">Register</h3>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName1" className="form-label">Name</label>
                            <input type="text" onBlur={nameHandle} className="form-control" id="exampleInputName" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                            <input type="email" onBlur={emailHandle} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" onBlur={passwordHandle} className="form-control" id="exampleInputPassword1" />
                            <p className="text-danger">{error}</p>
                        </div>
                        <div className="d-flex justify-content-center">
                            <button type="submit" className="text-center btn btn-primary">Register</button>
                        </div>
                        <br /><br />
                        <h5>ALready a User? <Link to='/login'>Log In here</Link></h5>
                        <OtherButtons method="Register"></OtherButtons>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;