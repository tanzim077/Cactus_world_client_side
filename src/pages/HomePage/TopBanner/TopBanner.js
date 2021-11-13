import React from 'react';
import './TopBanner.css';
import { Link } from 'react-router-dom';
import bg1 from '../../../images/bg1.jpg'
import Typed from 'typed.js';

const TopBanner = () => {
    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {
        const options = {
            strings: [
                'World <i>of</i> Cactus',
                'Customize<strong> your</strong> home'
            ],
            typeSpeed: 50,
            backSpeed: 50,
        };

       typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])

    return (
        <div className="container-fluid">
            <div className="static-slider7" style={{
                backgroundImage: `url(${bg1})`
            }}>
                <div className="container">

                    <div className="row justify-content-center">

                        <div className="col-md-8 align-self-center text-center">
                            <h1 className="title text-white"><span style={{ whiteSpace: 'pre' }} ref={el} /></h1>
                            <h5 className="text-white">Best Home Decorated Cactus Planet Suppliers</h5>
                            <Link to='/items'>
                                <a className="btn btn-danger-gradiant rounded-pill btn-md mt-3 border-0 text-white" href="">
                                    <span>Our Collections <i className="ti-arrow-right"></i></span>
                                </a>
                            </Link>
                            <Link to='/aboutus'>
                                <a className="btn btn-outline-light rounded-pill btn-md mt-3" data-toggle="modal" data-target="#static-slide7" href=""><i className="mr-2 icon-control-play"></i> About US </a>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopBanner;