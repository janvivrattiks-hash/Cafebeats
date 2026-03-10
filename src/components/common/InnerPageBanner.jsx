import React from 'react';
import Container from './Container';

const InnerPageBanner = ({ title, subtitle, image }) => {
    return (
        <section className="relative pt-40 pb-28 text-white overflow-hidden">
            <div className="absolute inset-0 z-0">
                <img
                    src={image || "https://cafebeats.in/wp-content/uploads/2021/07/cafe01.jpg"}
                    alt={title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <Container className="relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    {subtitle && (
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            {subtitle}
                        </span>
                    )}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                        {title}
                    </h1>
                </div>
            </Container>
        </section>
    );
};

export default InnerPageBanner;
