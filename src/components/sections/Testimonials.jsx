import React from 'react';
import { Quote } from 'lucide-react';
import Container from '../common/Container';
import SectionTitle from '../common/SectionTitle';
import Button from '../common/Button';
import { Link } from 'react-router-dom';

const testimonials = [
    {
        quote: "I was so overwhelmed with the hospitality at Café Beats. Visited the cafe during our show in Varachha and loved the tasty food and ambiance. Sizzler was just yum. All the best for the future Bajatey Raho ;)",
        name: "RJ Yuvraaj",
        role: "Fittest RJ of Surat",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
        quote: "What a beautiful Lounge of Vapi!! I couldn't believe that it's a Surat based brand and made an outlet with aesthetics like a multinational. Food is delicious and thanks staff for the good service. Kudos to the owners.",
        name: "Sweety Shah",
        role: "Recruitment Consultant",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    },
    {
        quote: "Thanks Team Café Beats for such an overwhelming welcome during movie promotion of Dhunki. I wish all the success to the team, Love Pratik",
        name: "Pratik Gandhi",
        role: "Actor · Scam 1992 fame",
        avatar: "https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=200&h=200&fit=crop&crop=face",
    },
    {
        quote: "Glad to see good food getting served on board RO RO ferry. Indeed had a good experience with Café Beats. Fresh Food at reasonable rates. Carry on.",
        name: "Nidhi Desai",
        role: "Professor",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    },
];

const outlets = [
    'Mota Varachha', 'Piplod', 'Vapi', 'Sarthana', 'Mumbai',
    'Dumas', 'Navsari', 'Vadodara', 'Daman', 'Khadki (NH-48)',
    'Anthem Circle', 'Pal-Adajan', 'Hajira-Ghogha Road Ferry',
];

const Testimonials = () => {
    return (
        <>
            {/* Testimonials Section */}
            <section className="section-padding bg-white" id="testimonials">
                <Container>
                    <SectionTitle
                        title="What They're Saying"
                        subtitle="Customer Stories"
                        center
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="relative bg-cream rounded-[2rem] p-8 border border-cream-dark hover:shadow-xl transition-shadow duration-500 group"
                            >
                                <Quote className="text-primary/15 absolute top-6 right-8" size={56} />
                                <div className="relative z-10">
                                    <p className="text-dark-lighter italic leading-relaxed text-base mb-6">
                                        "{t.quote}"
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <img
                                            src={t.avatar}
                                            alt={t.name}
                                            className="w-14 h-14 rounded-full object-cover border-2 border-primary/30"
                                        />
                                        <div>
                                            <p className="font-display font-bold text-dark">{t.name}</p>
                                            <p className="text-primary text-sm">{t.role}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </Container>
            </section>

            {/* Outlets Section */}
            <section className="section-padding bg-cream" id="outlets">
                <Container>
                    <SectionTitle
                        title="Cafebeats Outlets"
                        subtitle="Find Us Near You"
                        center
                    />
                    <div className="flex flex-wrap gap-3 justify-center mt-8 mb-14">
                        {outlets.map((outlet, i) => (
                            <span
                                key={i}
                                className="px-5 py-2 bg-white border border-cream-dark rounded-full text-dark font-medium text-sm hover:border-primary hover:text-primary transition-all cursor-default"
                            >
                                📍 {outlet}
                            </span>
                        ))}
                    </div>

                    {/* Franchise CTA */}
                    <div className="bg-primary rounded-[2.5rem] p-10 md:p-14 text-center text-white">
                        <p className="text-primary/20 font-bold uppercase tracking-widest text-sm mb-4">Franchise Opportunity</p>
                        <h3 className="text-3xl md:text-4xl font-display font-bold mb-3">
                            Be a Part of Franchise Family
                        </h3>
                        <p className="text-white/80 mb-3 max-w-xl mx-auto">All you need is:</p>
                        <ul className="text-white/90 font-semibold space-y-1 mb-8 text-lg">
                            <li>✔ Passion and dream to open your own Cafe-Restaurant</li>
                            <li>✔ Brand Loyalty</li>
                        </ul>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="tel:+919913666555"
                                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-cream transition-colors"
                            >
                                📞 +91 99136 66555
                            </a>
                            <a
                                href="tel:+919924574894"
                                className="inline-block bg-white text-primary font-bold py-3 px-8 rounded-full hover:bg-cream transition-colors"
                            >
                                📞 +91 99245 74894
                            </a>
                            <a
                                href="mailto:info@cafebeats.in"
                                className="inline-block border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-primary transition-colors"
                            >
                                ✉️ info@cafebeats.in
                            </a>
                        </div>
                    </div>
                </Container>
            </section>
        </>
    );
};

export default Testimonials;
