import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Route, Redirect } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const AdminRoute = ({ children, ...rest }) => {
    const { user, admin, isLoading } = useAuth();
    // if (!admin || isLoading) { spinner }
    
    if (!admin || isLoading) {
        return (
            <div className="text-center my-auto">
                <Spinner animation="grow" variant="success" />
            </div>
        );
    }
    return (
        <Route
            {...rest}
            render={({ location }) =>
                user.email && admin ?
                    (children)
                    :
                    (
                        <Redirect
                        to={{
                            pathname: "/",
                            state: { from: location }
                        }}
                        />
                    )
            }
        />
    );
};

export default AdminRoute;