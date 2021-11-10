import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import MenuBar from '../../Shared/MenuBar/MenuBar';
import CactusItems from '../CactusItems/CactusItems/CactusItems';

const Home = () => {
    return (
        <div>
           <MenuBar/>
            <CactusItems />
            <Footer />
        </div>
    );
};

export default Home;