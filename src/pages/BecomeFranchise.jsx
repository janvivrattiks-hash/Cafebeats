import React, { useState } from 'react';
import Container from '../components/common/Container';
import SectionTitle from '../components/common/SectionTitle';

const BecomeFranchise = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would typically handle the form submission
        console.log('Form submitted:', formData);
        alert('Thank you for your interest! We will contact you soon.');
        setFormData({ name: '', email: '', phone: '', message: '' });
    };

    return (
        <>
            {/* Hero Section */}
            < section className="relative pt-32 pb-20 bg-dark text-white overflow-hidden" >
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1920&q=80"
                        alt="Cafe Franchise"
                        className="w-full h-full object-cover opacity-30"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent"></div>
                </div>

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">
                            Franchise Opportunity
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-white">
                            Be a Part of the Franchise Family
                        </h1>
                        <p className="text-lg text-white/80 leading-relaxed">
                            Join Cafebeats — a chain of progressive, themed cafés with the lowest investment in the industry, high ROI, and sustainable growth.
                        </p>
                    </div>
                </Container>
            </section >

            {/* Content & Form Section */}
            < section className="section-padding bg-cream" >
                <Container>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">

                        {/* Left Side: Info */}
                        <div>
                            <SectionTitle
                                title="Why Partner With Us?"
                                subtitle="Growth & Opportunity"
                            />

                            <div className="space-y-8 mt-8">
                                <div className="bg-white p-8 rounded-3xl border border-cream-dark shadow-sm">
                                    <h3 className="text-xl font-display font-bold text-dark mb-4">All You Need Is:</h3>
                                    <ul className="space-y-4">
                                        <li className="flex items-start gap-3">
                                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">🔥</span>
                                            <p className="text-dark-lighter font-medium">Passion and dream to open your own Cafe - Restaurant</p>
                                        </li>
                                        <li className="flex items-start gap-3">
                                            <span className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0 mt-0.5">🤝</span>
                                            <p className="text-dark-lighter font-medium">Brand Loyalty and commitment to quality</p>
                                        </li>
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="text-lg font-display font-bold text-dark">Contact Information</h4>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-cream-dark">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary flex-shrink-0">📞</div>
                                        <div>
                                            <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Franchise Inquiries</p>
                                            <div className="font-medium text-dark flex flex-col sm:flex-row sm:gap-4">
                                                <a href="tel:+919913666555" className="hover:text-primary transition-colors">+91 99136 66555</a>
                                                <span className="hidden sm:inline text-cream-dark">|</span>
                                                <a href="tel:+919924574894" className="hover:text-primary transition-colors">+91 99245 74894</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-cream-dark">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-xl text-primary flex-shrink-0">✉️</div>
                                        <div>
                                            <p className="text-xs text-dark-lighter uppercase tracking-wider mb-1">Cafebeats E-mail</p>
                                            <a href="mailto:info@cafebeats.in" className="font-medium text-dark hover:text-primary transition-colors">
                                                info@cafebeats.in
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Side: Form */}
                        <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-cream-dark">
                            <h3 className="text-2xl font-display font-bold text-dark mb-2">Apply for Franchise</h3>
                            <p className="text-dark-lighter text-sm mb-8">Fill out the form below and our team will get back to you shortly.</p>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-dark-lighter mb-1.5">Your Name <span className="text-red-500">*</span></label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-dark-lighter/50"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-dark-lighter mb-1.5">Your Email <span className="text-red-500">*</span></label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-dark-lighter/50"
                                        placeholder="john@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-dark-lighter mb-1.5">Your Mobile No. <span className="text-red-500">*</span></label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-dark-lighter/50"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-dark-lighter mb-1.5">Your Message (Optional)</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-cream focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 placeholder-dark-lighter/50 resize-y"
                                        placeholder="Tell us about your location, experience, or any specific questions..."
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary-light text-white font-bold py-4 rounded-xl transition-all duration-300 mt-4 shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transform hover:-translate-y-0.5"
                                >
                                    Submit Application
                                </button>
                            </form>
                        </div>

                    </div>
                </Container>
            </section >
        </>
    );
};

export default BecomeFranchise;
