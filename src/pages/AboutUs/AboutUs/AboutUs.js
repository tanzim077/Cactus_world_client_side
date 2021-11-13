import React from 'react';
import Maps from '../Maps/Maps';
import MenuBar from '../../Shared/MenuBar/MenuBar';

const AboutUs = () => {
    return (
        <>
            <div className="pb-4 pt-4">
                <h1 className="text-center"> About US </h1>
                <div className="d-lg-flex container p-3">
                    <div className="container">
                        <Maps></Maps>
                    </div>
                    <div className="container">

                        <h3 className="text-center">Some of our collections</h3>
                        <div className="d-flex justify-content-between">
                            <div>
                                <ul>
                                    <li>Angel Wings Cactus</li>
                                    <li>Saguaro Cactus</li>
                                    <li>African Milk Tree</li>
                                    <li>Rat Tail Cactus</li>
                                </ul>
                            </div>
                            <div>
                                <ul>
                                    <li>Old Lady Cactus</li>
                                    <li>Bishop's Cap</li>
                                    <li>Parodia</li>
                                    <li>Moon Cactus</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-center"> We Supply most antique and fresh cactus planet for your home decoration. We always believe in good services and customer satisfaction.</p>

                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutUs;