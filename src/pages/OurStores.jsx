import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import InnerPageBanner from '../components/common/InnerPageBanner';
import { MapPin } from 'lucide-react';

const outlets = [
    'Mota Varachha', 'Piplod', 'Vapi', 'Sarthana', 'Mumbai',
    'Dumas', 'Navsari', 'Vadodara', 'Daman', 'Khadki (NH-48)',
    'Anthem Circle', 'Pal-Adajan', 'Hajira-Ghogha Road Ferry',
];

const OurStores = () => {
    return (
        <div className="animate-fade-in bg-cream min-h-screen">
            <InnerPageBanner
                title="Our Stores"
                subtitle="Cafebeats Outlets"
                image="/banner-3.webp"
            />

            <section className="section-padding">
                <Container>
                    <SectionTitle
                        title="Find Us Near You"
                        subtitle="Locations Across India"
                        center
                    />

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
                        {outlets.map((outlet, i) => (
                            <div
                                key={i}
                                className="bg-white p-6 rounded-2xl border border-cream-dark shadow-sm hover:shadow-md hover:border-primary/50 transition-all duration-300 flex items-start gap-4 group"
                            >
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <h4 className="font-display font-bold text-dark text-lg group-hover:text-primary transition-colors">{outlet}</h4>
                                    <p className="text-xs text-dark-lighter mt-1">Cafebeats Outlet</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Franchise CTA within Our Stores */}
                    <div className="mt-20 bg-primary rounded-[2.5rem] p-10 md:p-14 text-center text-white relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://cafebeats.in/wp-content/uploads/2021/07/cafe02.jpg')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
                        <div className="relative z-10">
                            <p className="text-white/80 font-bold uppercase tracking-widest text-sm mb-4">Franchise Opportunity</p>
                            <h3 className="text-3xl md:text-5xl font-display font-bold mb-6">
                                Be a Part of Franchise Family
                            </h3>
                            <a
                                href="/become-a-franchise"
                                className="inline-block bg-white text-primary font-bold py-4 px-10 rounded-full hover:bg-cream transition-colors shadow-lg transform hover:-translate-y-1"
                            >
                                Apply for Franchise
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default OurStores;
