import React from 'react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const reasons = [
    {
        num: '01',
        title: 'Thematic Aesthetics',
        text: 'FnB places are not only food joints, but also places for leisure hangout. We have invested not just money but ideas into developing a unique and fusion concept of interiors based on music and food — making every outlet the most loved destination in that locality.',
    },
    {
        num: '02',
        title: 'Progressive Menu',
        text: 'Compromising on food taste and presentation is something we don\'t have in our dictionary. The menu is developed keeping the hyper local culture in mind and keeps upgrading on regular intervals based on customer expectations.',
    },
    {
        num: '03',
        title: 'Sustainable Growth',
        text: 'Our goal is not to be part of any race, but to be customers\' most loved and preferred brand. Cafe Beats has managed to keep the area\'s most loved lounge tag at all the places we have opened.',
    },
    {
        num: '04',
        title: 'Right Pricing',
        text: 'We have made sure our outlets serve products at a proper competitive pricing. Open for everyone — from lower middle class to higher class. You will always get something in your budget with similar or better quality than nearby cafes.',
    },
    {
        num: '05',
        title: 'Adaptability',
        text: 'Post pandemic it\'s been proved that brands with a vision of adaptability rule the market. Customers are heart and employees are brain. We don\'t force rules on employees and food on customers — we internally nurture both.',
    },
];

const About = () => {
    return (
        <section className="section-padding bg-white" id="about">
            <Container>
                {/* Top: image + intro */}
                <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                    <div className="relative animate-fade-in group">
                        <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
                            <img
                                src="/about-cafebeat.webp"
                                alt="About Cafe Beats"
                                className="w-full h-[520px] object-cover"
                                onError={(e) => {
                                    e.target.src = '/about-cafebeat.webp';
                                }}
                            />
                        </div>
                        <div className="absolute -top-6 -right-6 lg:-right-10 w-48 h-48 border-4 border-primary rounded-[2rem] -z-10 group-hover:translate-x-4 group-hover:-translate-y-4 transition-transform duration-500"></div>
                        <div className="absolute -bottom-8 -left-4 bg-white p-5 rounded-2xl shadow-xl z-20">
                            <p className="text-xs text-primary font-bold uppercase tracking-widest mb-1">Founded By</p>
                            <p className="text-sm font-bold text-dark font-display">Dr. Mahesh Khunt</p>
                            <p className="text-sm font-bold text-dark font-display">& Mr. Shailesh Kheni</p>
                            <p className="text-xs text-dark-lighter mt-1">Since 2018 · Surat, Gujarat</p>
                        </div>
                    </div>

                    <div className="animate-slide-up">
                        <SectionTitle title="About Cafe Beats" subtitle="Our Story" />
                        <div className="space-y-5 text-dark-lighter leading-relaxed text-base lg:text-lg">
                            <p>
                                <strong className="text-dark">Cafe Beats is a chain of progressive, themed cafés</strong> founded by Dr. Mahesh Khunt and Mr. Shailesh Kheni in 2018. With a shared vision rooted in hospitality, they aimed to create a destination where people can enjoy food, music, and leisure.
                            </p>
                            <p>
                                City of Surat has seen a drastic change in cafe culture in recent years. With the global exposure, customers are becoming more interested in trying newer cuisines, visiting unique places which are serving instaworthy experience with food and ambiance.
                            </p>
                            <p>
                                At Cafe Beats, our focus is to give better food and best service and we are proud that even with the growth, we are able to sustain the quality food and services.
                            </p>
                        </div>

                        {/* Vision/Mission */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                            <div className="bg-cream p-5 rounded-2xl border border-cream-dark">
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">🎯 Our Vision</p>
                                <p className="text-dark-lighter text-sm">Most loved leisure cafe brand that spreads delicious products and service smiles across the globe.</p>
                            </div>
                            <div className="bg-cream p-5 rounded-2xl border border-cream-dark">
                                <p className="text-primary font-bold text-xs uppercase tracking-widest mb-2">🚀 Our Mission</p>
                                <p className="text-dark-lighter text-sm">100 successfully running outlets by end of the year 2030.</p>
                            </div>
                        </div>

                        <div className="pt-8">
                            <Button variant="outline"><Link to="/about">Learn More About Us</Link></Button>
                        </div>
                    </div>
                </div>

                {/* 5 Reasons */}
                <div>
                    <SectionTitle
                        title="5 Reasons Why Cafe Beats is a Unique Cafe Brand"
                        subtitle="What Sets Us Apart"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                        {reasons.map((r) => (
                            <div key={r.num} className="bg-cream rounded-[2rem] p-8 border border-cream-dark hover:shadow-lg transition-shadow duration-300 group">
                                <span className="text-5xl font-display font-bold text-primary/20 group-hover:text-primary/40 transition-colors">{r.num}</span>
                                <h4 className="text-lg font-display font-bold text-dark mt-3 mb-3">{r.title}</h4>
                                <p className="text-dark-lighter text-sm leading-relaxed">{r.text}</p>
                            </div>
                        ))}

                        {/* Welcome CTA card */}
                        <div className="bg-primary rounded-[2rem] p-8 text-white flex flex-col justify-center">
                            <p className="text-3xl font-display font-bold mb-4">Welcome to Cafe Beats!</p>
                            <p className="text-white/80 text-sm leading-relaxed">
                                Our focus is to reach as many cities as possible where people look for a good place that feels like your own place, serves like your own staff, celebrates like your own friends.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default About;
