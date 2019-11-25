import React from 'react';
import Fileupload from './fileUpload';
import Sliderpoduct from './Sliderpoduct'
import Banner1 from './banner1'
import STabs from './tabs'
import Silk from './silk';
import Footer from './footer';
const Home = () => {
    return(
        <div>
            <h1>Home page for sliders</h1>
            {/* <Fileupload/> */}
            {/* <Sliderpoduct /> */}
            <Banner1 />
            <Silk />
            <STabs />
            <Footer />
        </div>
        )
    }

export default Home;