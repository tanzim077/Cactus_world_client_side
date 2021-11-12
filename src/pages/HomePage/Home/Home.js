import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import CactusItems from '../CactusItems/CactusItems/CactusItems';
import Reviews from '../Reviews/Reviews/Reviews';

const Home = () => {
    return (
        <div>
           <MenuBar/>
            <CactusItems />
            <Reviews />
            <Footer />
        </div>
    );
};

export default Home;