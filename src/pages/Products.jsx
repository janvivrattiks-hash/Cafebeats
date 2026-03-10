import React from 'react';
import ProductsSection from '../components/sections/Products';
import InnerPageBanner from '../components/common/InnerPageBanner';

const Products = () => {
    return (
        <div className="animate-fade-in bg-cream min-h-screen">
            <InnerPageBanner
                title="Our Full Menu"
                subtitle="What's Cooking"
                image="/banner-2.webp"
            />
            <div className="py-12">
                <ProductsSection />
            </div>
        </div>
    );
};

export default Products;
