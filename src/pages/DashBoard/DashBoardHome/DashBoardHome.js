import React from 'react';
import './DashBoardHome.css';

const DashBoardHome = () => {
    return (
        <div id="dash-nav" className="d-flex flex-column">
            <nav id="navbar" className="nav-menu navbar">
                <ul>
                    <li><a href="#hero" className="nav-link scrollto active"><i className="bx bx-home"></i>
                        <span>Home</span></a></li>
                    <li><a href="#items" className="nav-link scrollto"><i className="bx bx-user"></i> <span>Items</span></a>
                    </li>
                    <li><a href="#orders" className="nav-link scrollto"><i className="bx bx-file-blank"></i>
                        <span>Orders</span></a></li>
                    <li><a href="#portfolio" className="nav-link scrollto"><i className="bx bx-book-content"></i>
                        <span>Make Admin</span></a></li>
                    <li><a href="#reviews" className="nav-link scrollto"><i className="bx bx-server"></i>
                        <span>User Review </span></a></li>
                </ul>
            </nav>
        </div>
    );
};

export default DashBoardHome;