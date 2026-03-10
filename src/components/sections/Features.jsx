import React from 'react';
import Container from '../common/Container';

const stats = [
    { value: '13+', label: 'Outlets Across India', emoji: '📍' },
    { value: '40K+', label: 'Happy Customers', emoji: '😊' },
    { value: '2018', label: 'Year Founded', emoji: '🏆' },
    { value: '100', label: 'Target Outlets by 2030', emoji: '🚀' },
];

const features = [
    {
        emoji: '☕',
        title: 'Total Sell of Coffee',
        description: 'Thousands of cups brewed with love and precision. From classic espresso to specialty cold brews — Beat pe Coffee is our signature.',
    },
    {
        emoji: '🍽️',
        title: 'Total Sell of Sizzler',
        description: 'Our sizzling hot platters are the house specialty — brought to your table with theatrical flair and unforgettable aroma.',
    },
    {
        emoji: '🍔',
        title: 'Total Sell of Burger',
        description: 'Our progressive menu features loaded burgers with signature sauces, fresh ingredients, and hyper-local flavors.',
    },
    {
        emoji: '🤝',
        title: 'Become a Franchise',
        description: 'With lowest investment in the industry, Cafebeats ensures high ROI and sustainable growth. All you need is passion and brand loyalty.',
    },
];

const Features = () => {
    return (
        <>
            {/* Stats Band */}
            {/* <section className="bg-primary py-14">
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
                        {stats.map((stat, i) => (
                            <div key={i} className="flex flex-col items-center">
                                <span className="text-4xl mb-2">{stat.emoji}</span>
                                <p className="text-4xl md:text-5xl font-display font-bold">{stat.value}</p>
                                <p className="text-sm mt-2 opacity-80 uppercase tracking-widest">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section> */}

            {/* Feature Cards */}
            <section className="section-padding bg-cream">
                <Container>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {features.map((f, i) => (
                            <div
                                key={i}
                                className="bg-white p-8 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all duration-500 group border border-cream-dark"
                            >
                                <div className="w-16 h-16 bg-cream rounded-2xl flex items-center justify-center text-3xl mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                                    {f.emoji}
                                </div>
                                <h3 className="text-xl font-display font-bold text-dark mb-3">{f.title}</h3>
                                <p className="text-dark-lighter leading-relaxed text-sm">{f.description}</p>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Features;
