import React from 'react';
import Hero from '../components/sections/Hero';
import Products from '../components/sections/Products';
import About from '../components/sections/About';
import Features from '../components/sections/Features';
import Testimonials from '../components/sections/Testimonials';

const Home = () => {
    return (
        <div className="pt-24 animate-fade-in">
            <Hero />
            <Features />
            <Products />
            <About />
        </div>
    );
};

export default Home;
