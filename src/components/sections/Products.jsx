import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const menuCategories = [
    {
        category: 'Types of Coffee',
        emoji: '☕',
        description: 'Barista Institute coffee blog is made with genuine love for coffee, with a Nordic twist. We hope you enjoy our coffee blog and get inspired! From espresso to specialty brews — Beat pe Coffee is our promise.',
        image: '/cofffee.webp',
        tag: 'Best Seller',
        href: 'https://cafebeats.in/',
    },
    {
        category: 'Types of Burger',
        emoji: '🍔',
        description: 'Juicy, loaded burgers with signature sauces and fresh ingredients that will leave you coming back for more. Perfectly crafted for every palate.',
        image: '/dessert-snacks.webp', // Using snack image as a placeholder for burger if no specific burger image provided, or dessert-snacks
        tag: 'Popular',
        href: 'https://cafebeats.in/',
    },
    {
        category: 'Types of Sandwich',
        emoji: '🥪',
        description: 'Grilled, toasted, and loaded — our sandwiches are made with fresh bread and seasonal fillings. A truck that carries healthy foods for your healthy moods.',
        image: '/sandwich.webp',
        tag: 'Fresh Daily',
        href: 'https://cafebeats.in/',
    },
    {
        category: 'Types of Sizzler',
        emoji: '🍽️',
        description: 'Sizzling hot platters brought to your table with theatrical flair — the house specialty at Cafe Beats. Unforgettable aroma and taste every single time.',
        image: '/sizzler.webp',
        tag: 'Must Try',
        href: 'https://cafebeats.in/',
    },
    {
        category: 'Desserts & Shakes',
        emoji: '🍰',
        description: 'End your meal on a sweet note with our range of indulgent desserts, thick shakes and cold beverages crafted with the finest ingredients.',
        image: '/dessert-snacks.webp',
        tag: 'Sweet Pick',
        href: 'https://cafebeats.in/',
    },
    {
        category: 'Snacks & Fries',
        emoji: '🍟',
        description: 'Perfect bites for those in-between moments — crispy fries, loaded nachos and crunchy appetizers. Poha-Samosa to RO RO Ferry special — always fresh.',
        image: '/dessert-snacks.webp',
        tag: 'Quick Bites',
        href: 'https://cafebeats.in/',
    },
];

const ProductCard = ({ category, emoji, description, image, tag }) => (
    <div className="bg-white rounded-[2rem] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group border border-cream-dark">
        <div className="relative overflow-hidden h-52 bg-cream">
            <img
                src={image}
                alt={category}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <span className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
                {tag}
            </span>
        </div>
        <div className="p-6">
            <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{emoji}</span>
                <h3 className="text-lg font-display font-bold text-dark">{category}</h3>
            </div>
            <p className="text-dark-lighter text-sm leading-relaxed">{description}</p>
        </div>
    </div>
);

const Products = () => {
    return (
        <section className="section-padding bg-cream" id="menu">
            <Container>
                <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
                    <SectionTitle
                        title="Our Delicious Food"
                        subtitle="What's Cooking"
                    />
                    <p className="text-dark-lighter max-w-sm md:text-right text-sm leading-relaxed">
                        A truck that carries healthy foods for your healthy moods — available on Swiggy & Zomato.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {menuCategories.map((item, i) => (
                        <ProductCard key={i} {...item} />
                    ))}
                </div>

                <div className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center">
                    <Button variant="primary">
                        <Link to="/products">View Full Menu</Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
};

export default Products;
