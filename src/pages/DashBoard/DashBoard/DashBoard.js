import React from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';
import './DashBoard.css';

import {
    Switch,
    Route,
    Link,
    useRouteMatch
} from "react-router-dom";
import DashBoardHome from '../DashBoardHome/DashBoardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute'
import AddCactus from '../AddCactus/AddCactus';
import ItemsList from '../ItemsList/ItemsList';
import OrdersList from '../OrdersList/OrdersList';

const DashBoard = () => {


    let { path, url } = useRouteMatch();
    console.log(path);
    console.log(url);
    return (
        <div className ='d-flex'>
            <div>
                <div id="dash-nav" className="d-flex flex-column">
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <Link to="/home"><Nav.Link href="home">Home</Nav.Link></Link>
                            <Link to="/payment"><NavDropdown.Item href="payment">Payment</NavDropdown.Item></Link>
                            <Link to={`${url}/addcactus`}><NavDropdown.Item href="addcactus">Add a Cactus</NavDropdown.Item></Link>
                            <Link to={`${url}/itemslist`}><NavDropdown.Item href="itemslist">All Cactuses</NavDropdown.Item></Link>
                            <Link to={`${url}/orderslist`}><NavDropdown.Item href="orderslist">All Orders</NavDropdown.Item></Link>
                            <Link to={`${url}/review`}><NavDropdown.Item href="reviews">Reviews</NavDropdown.Item></Link>
                            <Link to={`${url}/makeadmin`}><NavDropdown.Item href="makeadmin">Make Admin</NavDropdown.Item></Link>
                        </ul>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path={path}>
                    <DashBoardHome />
                </Route>
                <AdminRoute path={`${path}/addcactus`}>
                    <AddCactus />
                </AdminRoute>
                <AdminRoute path={`${path}/itemslist`}>
                    <ItemsList />
                </AdminRoute>
                <AdminRoute path={`${path}/orderslist`}>
                    <OrdersList />
                </AdminRoute>
                <AdminRoute path={`${path}/review`}>
                    <MakeAdmin />
                </AdminRoute>
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                </AdminRoute>
            </Switch>
        </div >
    );
};

export default DashBoard;