import axios from 'axios';

const apiClient = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://api.cafebeats.in',
    headers: {
        'Content-Type': 'application/json',
    },
});

/**
 * API Service for Cafebeats
 * Note: API will be connected later with backend
 */

export const getProducts = async () => {
    // API will be connected later with backend
    console.log('Fetching products...');
    // Mock data for initial development
    return [
        { id: 1, name: 'Espresso', description: 'Strong and bold espresso shot.', price: 150, image: 'https://images.unsplash.com/photo-1510707547241-04b6d483de4f?w=800&q=80' },
        { id: 2, name: 'Cappuccino', description: 'Rich espresso with steamed milk foam.', price: 220, image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?w=800&q=80' },
        { id: 3, name: 'Latte', description: 'Smooth espresso with plenty of steamed milk.', price: 240, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=800&q=80' },
        { id: 4, name: 'Cold Brew', description: 'Slow-steeped cold coffee for a smooth taste.', price: 260, image: 'https://images.unsplash.com/photo-1517701604599-bb28b3e50811?w=800&q=80' },
    ];
};

export const getProductDetails = async (id) => {
    // API will be connected later with backend
    console.log(`Fetching details for product ${id}...`);
    return { id, name: 'Product Name', description: 'Detailed description.', price: 100 };
};

export const contactFormSubmit = async (formData) => {
    // API will be connected later with backend
    console.log('Submitting contact form...', formData);
    return { success: true, message: 'Message sent successfully!' };
};

export default apiClient;
