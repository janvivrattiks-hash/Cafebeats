import React, { createContext, useContext, useState, useEffect } from 'react';
import * as api from '../services/API';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getProducts = async () => {
        setLoading(true);
        try {
            const data = await api.getProducts();
            setProducts(data);
            setError(null);
        } catch (err) {
            setError('Failed to fetch products');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const getProductById = (id) => {
        return products.find(p => p.id === parseInt(id));
    };

    useEffect(() => {
        getProducts();
    }, []);

    const value = {
        products,
        loading,
        error,
        getProducts,
        getProductById
    };

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};
