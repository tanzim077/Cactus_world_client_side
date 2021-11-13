import React from 'react';
import AboutUs from '../../AboutUs/AboutUs/AboutUs';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import CactusItems from '../CactusItems/CactusItems/CactusItems';
import Reviews from '../Reviews/Reviews/Reviews';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <MenuBar />
            <TopBanner/>
            <CactusItems />
            <Reviews />
            <AboutUs />
            <Footer />
        </div>
    );
};

export default Home;