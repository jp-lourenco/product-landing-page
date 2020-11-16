import React from 'react';
import HeaderContainer from '../container/Header';
import FeatureContainer from '../container/Feature';
import AboutContainer from '../container/About';
import VideoContainer from '../container/Video';

const Home = () => {
    return (
        <>
            <HeaderContainer />
            <FeatureContainer />
            <AboutContainer />
            <VideoContainer />
        </>
    );
};

export default Home;
