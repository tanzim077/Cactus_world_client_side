import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import CactusItems from '../CactusItems/CactusItems/CactusItems';

const Home = () => {
    return (
        <div>
            <h1>Hello From HomePage</h1>
            <CactusItems />
            <Footer />
        </div>
    );
};

export default Home;