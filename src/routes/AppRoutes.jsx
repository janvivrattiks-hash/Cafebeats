import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import ProductsPage from '../pages/Products';
import Contact from '../pages/Contact';
import BecomeFranchise from '../pages/BecomeFranchise';
import OurStores from '../pages/OurStores';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/become-a-franchise" element={<BecomeFranchise />} />
            <Route path="/our-stores" element={<OurStores />} />
        </Routes>
    );
};

export default AppRoutes;
