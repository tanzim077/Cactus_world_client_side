import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';


const OtherButtons = (props) => {

    const { handleGoogleSignIn } = useAuth();

    const location = useLocation();
    const history = useHistory();

    console.log("History ")
    console.log(history);
    console.log("Location");
    console.log(location);

    const handleGoogle = () => {
        handleGoogleSignIn(location, history);
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
                
            </div>
        </div>);
};

export default OtherButtons;