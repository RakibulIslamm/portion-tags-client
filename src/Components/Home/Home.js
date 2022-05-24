import React from 'react';
import useAuth from '../../hooks/useAuth';
import AboutUs from './AboutUs/AboutUs';
import Banner from './Banner/Banner';
import BusinessSummary from './BusinessSummary/BusinessSummary';
import Products from './Products/Products';
import Reviews from './Reviews/Reviews';

const Home = () => {
    const { user } = useAuth()
    console.log(user);
    return (
        <>
            <Banner />
            <Products />
            <BusinessSummary />
            <AboutUs />
            <Reviews />
        </>
    );
};

export default Home;