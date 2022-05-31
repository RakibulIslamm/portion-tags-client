import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Location from './Location/Location';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <>
            <Banner />
            <Products />
            <BusinessSummary />
            <AboutUs />
            <Location />
            <Reviews />
        </>
    );
};

export default Home;