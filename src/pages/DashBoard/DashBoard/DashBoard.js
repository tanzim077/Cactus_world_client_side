import React from 'react';
import { Button, Nav, NavDropdown } from 'react-bootstrap';
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
import MyOrders from '../../MyOrders/MyOrders';
import useAuth from '../../../hooks/useAuth';
import Payment from '../Payment/Payment';
import Review from '../Review/Review';

const DashBoard = () => {

    const { admin, logOut } = useAuth();
    let { path, url } = useRouteMatch();

    return (
        <div className='d-flex'>
            <div>
                <div id="dash-nav" className="d-flex flex-column">
                    <nav id="navbar" className="nav-menu navbar">
                        <ul>
                            <Link to="/home"><Nav.Link href="home">Home</Nav.Link></Link>
                            {!admin ?
                                <>
                                    <Link to={`${url}/myorders`}><NavDropdown.Item href="myorders">My Orders</NavDropdown.Item></Link>
                                    <Link to={`${url}/payment`}><NavDropdown.Item href="payment">Payment</NavDropdown.Item></Link>
                                    <Link to={`${url}/review`}><NavDropdown.Item href="reviews">Reviews</NavDropdown.Item></Link>

                                </>
                                :
                                <>
                                    <Link to={`${url}/makeadmin`}><NavDropdown.Item href="makeadmin">Make Admin</NavDropdown.Item></Link>
                                    <Link to={`${url}/addcactus`}><NavDropdown.Item href="addcactus">Add an Item</NavDropdown.Item></Link>
                                    <Link to={`${url}/itemslist`}><NavDropdown.Item href="itemslist">All Items</NavDropdown.Item></Link>
                                    <Link to={`${url}/orderslist`}><NavDropdown.Item href="orderslist">All Orders</NavDropdown.Item></Link>
                                </>
                            }
                            <Link to="/home"><NavDropdown.Item href="home" onClick={logOut} >Sign Out</NavDropdown.Item></Link>
                        </ul>
                    </nav>
                </div>
            </div>

            <Switch>
                <Route exact path={path}>
                    <DashBoardHome />
                </Route>
                <Route path={`${path}/review`}>
                    <Review />
                </Route>
                <Route exact path={`${path}/myorders`}>
                    <MyOrders />
                </Route>
                <Route exact path={`${path}/payment`}>
                    <Payment />
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
                <AdminRoute path={`${path}/makeAdmin`}>
                    <MakeAdmin />
                </AdminRoute>
            </Switch>
        </div >
    );
};

export default DashBoard;