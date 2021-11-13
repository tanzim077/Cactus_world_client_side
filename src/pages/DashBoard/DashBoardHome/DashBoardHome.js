import React from 'react';
import './DashBoardHome.css';
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";
import { Link } from 'react-router-dom';

import SwiperCore, {
    EffectCards
} from 'swiper';

// install Swiper modules
SwiperCore.use([EffectCards]);

const DashBoardHome = () => {
    return (
        <div className="container pt-4 px-4">
            <h1 className="text-center">Welcome to Dashboard</h1>

            <h3 className=" text-center py-3">Functionality of Dashboard</h3>

            <div>
                <Swiper effect={'cards'} grabCursor={true} className="mySwiper">
                    <SwiperSlide>My Order</SwiperSlide>
                    <SwiperSlide>Payment System</SwiperSlide>
                    <SwiperSlide>Review</SwiperSlide>
                    <SwiperSlide>Manage all Order</SwiperSlide>
                    <SwiperSlide>Create / Delete Item</SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default DashBoardHome;