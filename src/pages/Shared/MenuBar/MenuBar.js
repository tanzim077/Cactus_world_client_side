import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './MenuBar.css';
import logo from '../../../images/logo.png';

const MenuBar = () => {
    const { user, logOut } = useAuth();
    const defaultImg = 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y';

    return (
        <div>
            <div>
                <div className="d-lg-flex justify-content-evenly user-menubar">
                    <div className="col-12 col-md-12 col-lg-8 d-lg-flex custom-link">
                        <Navbar bg="light" expand="lg" className="navbar-brand">
                            <Container fluid>
                                <Navbar.Brand href=""><img className="logo-img" src={logo} alt="" /></Navbar.Brand>
                                
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav
                                        className="me-auto my-2 my-lg-0"
                                        style={{ maxHeight: '100px' }}
                                        navbarScroll
                                    >
                                        <Link to="/home"><Nav.Link href="home">Home</Nav.Link></Link>
                                        <Link to="/items"><Nav.Link href="events">Cactuses</Nav.Link></Link>
                                        <Link to="/dashboard"><Nav.Link href="dashboard">DashBoard</Nav.Link></Link>
                                        <Link to="/aboutus"><Nav.Link href="dashboard">About Us</Nav.Link></Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </div>
                    <div className="col-lg-4 ">
                        {
                            (user.email)
                                ?
                                <div className="d-flex gap-3 justify-content-end p-3 ">
                                    <div className="col-lg-5 d-flex align-items-center">
                                        <h5>{user.displayName}</h5>
                                    </div>
                                    <img src={user.photoURL || defaultImg} className="user-image" alt="" />
                                    <div className="col-lg-">
                                        <Link to="/home"><Button onClick={logOut} variant="primary"><i class="fas fa-sign-out-alt"></i> Sign Out</Button></Link>
                                    </div>
                                </div>
                                :
                                <div className="d-flex gap-3 justify-content-end p-3 ">
                                    <Link to="/login"><Button variant="warning"><i class="fas fa-sign-in-alt"> &nbsp;</i>Login</Button></Link>
                                    <Link to="/signup"><Button variant="info"><i class="fas fa-user-plus"></i>&nbsp;Signup</Button></Link>
                                </div>
                        }
                    </div>
                </div>

            </div>
        </div >
    );
};

export default MenuBar;