import React from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import InnerPageBanner from '../components/common/InnerPageBanner';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="animate-fade-in bg-cream min-h-screen">
            <InnerPageBanner
                title="Contact Us"
                subtitle="Get In Touch"
                image="/banner-4.webp"
            />
            <section className="section-padding">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
                        <div className="space-y-8">
                            <div className="bg-white p-8 flex items-start gap-6 rounded-[2rem] shadow-sm border border-cream-dark">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark mb-2 font-display">Cafebeats Location</h4>
                                    <p className="text-dark-lighter leading-relaxed">G-10 Blue Stone Building, Shyamdham mandirChowk, Sarthana Jakat Naka, Surat, Gujarat 395013</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 flex items-start gap-6 rounded-[2rem] shadow-sm border border-cream-dark">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark mb-2 font-display">Cafebeats Mo.no / Franchise Inqiury</h4>
                                    <p className="text-dark-lighter mb-1">Cafebeats Mo.no : +91 9924574894 | +91 9913666555</p>
                                    <p className="text-dark-lighter">For Franchise Inqiury : +91 9913666555 | +91 9924574894</p>
                                </div>
                            </div>

                            <div className="bg-white p-8 flex items-start gap-6 rounded-[2rem] shadow-sm border border-cream-dark">
                                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold text-dark mb-2 font-display">Cafebeats E-mail</h4>
                                    <p className="text-dark-lighter">info@cafebeats.in</p>
                                </div>
                            </div>
                        </div>

                        {/* Form */}
                        <div className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-cream-dark">
                            <form className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-dark-lighter text-sm mb-2 font-medium">Full Name</label>
                                        <input type="text" className="w-full bg-cream/50 border border-cream-dark rounded-2xl px-4 py-4 text-dark focus:outline-none focus:border-primary transition-colors focus:bg-white" placeholder="John Doe" />
                                    </div>
                                    <div>
                                        <label className="block text-dark-lighter text-sm mb-2 font-medium">Email Address</label>
                                        <input type="email" className="w-full bg-cream/50 border border-cream-dark rounded-2xl px-4 py-4 text-dark focus:outline-none focus:border-primary transition-colors focus:bg-white" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-dark-lighter text-sm mb-2 font-medium">Subject</label>
                                    <input type="text" className="w-full bg-cream/50 border border-cream-dark rounded-2xl px-4 py-4 text-dark focus:outline-none focus:border-primary transition-colors focus:bg-white" placeholder="Inquiry about..." />
                                </div>
                                <div>
                                    <label className="block text-dark-lighter text-sm mb-2 font-medium">Message</label>
                                    <textarea rows="4" className="w-full bg-cream/50 border border-cream-dark rounded-[2rem] px-4 py-4 text-dark focus:outline-none focus:border-primary transition-colors focus:bg-white" placeholder="Your message here..."></textarea>
                                </div>
                                <Button type="submit" className="w-full">Send Message</Button>
                            </form>
                        </div>
                    </div>
                </Container>
            </section>
        </div>
    );
};

export default Contact;
