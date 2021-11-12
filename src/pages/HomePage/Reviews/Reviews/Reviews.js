import React from 'react';
import useReviewsData from '../../../../hooks/useReviewsData';
import SingleReview from '../SingleReview/SingleReview';

import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper-bundle.min.css";


// import "./styles.css";


// import Swiper core and required modules
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


const Reviews = () => {
    const [data] = useReviewsData();

    return (
        <div className="container d-flex">
            <>
                <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} centeredSlides={true} autoplay={{
                    "delay": 2500,
                    "disableOnInteraction": false
                }} pagination={{
                    "clickable": true
                }} navigation={true} className="mySwiper">
                    {
                        data.map(singledata => <SwiperSlide><SingleReview key={singledata.id} singledata={singledata}></SingleReview> </SwiperSlide>)
                    }
                </Swiper>
            </>
        </div>
    );
};

export default Reviews;