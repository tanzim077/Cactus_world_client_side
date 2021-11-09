import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { GithubAuthProvider, GoogleAuthProvider } from '@firebase/auth';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const OtherButtons = (props) => {

    const { handleGoogleSignIn, signinUsingGithub, setIsLoading } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_URL = location.state?.from || '/home';

    const handleGoogle = () => {
        handleGoogleSignIn()
            .then((result) => {
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                history.push(redirect_URL);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GoogleAuthProvider.credentialFromError(error);
            }).finally(() => {
                setIsLoading(false)
            });
    }
    const handleGitHub = () => {
        signinUsingGithub()
            .then((result) => {
                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                history.push(redirect_URL);
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = GithubAuthProvider.credentialFromError(error);
            });
    }

    return (
        <div className="">
            <div className="text-center pt-4 text-capitalize text-primary">
                <h5>{props.method} using ...</h5>
            </div>
            <div className="mx-auto p-3 d-flex justify-content-center flex-column gap-2 ">
                <Row>
                    <Button onClick={handleGoogle} variant="secondary">
                        <i style={{
                            backgroundColor: "#dd4b39",
                            padding: "3px 9px",
                            borderRadius: "4px"
                        }}
                            class="fab fa-google"></i>
                        &nbsp;&nbsp;&nbsp;{props.method} with Google
                    </Button>
                </Row>
                <Row>
                    <Button onClick={handleGitHub} variant="secondary">
                        <i style={{
                            backgroundColor: "#333333",
                            padding: "3px 9px"
                        }} class="fab fa-github"></i
                        >&nbsp;&nbsp;&nbsp;{props.method} with Github
                    </Button>
                </Row>
            </div>
        </div>);
};

export default OtherButtons;