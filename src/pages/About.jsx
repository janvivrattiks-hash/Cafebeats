import React from 'react';
import AboutSection from '../components/sections/About';
import Features from '../components/sections/Features';
import InnerPageBanner from '../components/common/InnerPageBanner';

const About = () => {
    return (
        <div className="animate-fade-in bg-white min-h-screen">
            <InnerPageBanner
                title="About Us"
                subtitle="Our Story"
                image="/banner-1.webp"
            />
            <div className="py-12">
                <AboutSection />
                <Features />
            </div>
        </div>
    );
};

export default About;
