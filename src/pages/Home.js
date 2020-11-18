import React from 'react';
import HeaderContainer from '../container/Header';
import FeatureContainer from '../container/Feature';
import AboutContainer from '../container/About';
import VideoContainer from '../container/Video';
import FooterContainer from '../container/Footer';

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <FeatureContainer />
            <AboutContainer />
            <VideoContainer />
            <FooterContainer />
        </>
    );
};

export default Home;
