import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Container from '../common/Container';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark pt-20 pb-10">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand */}
                    <div className="space-y-6">
                        <Link to="/">
                            <img
                                src="/cafebeats-423x201-white-logo.png"
                                alt="Cafebeats"
                                className="h-14 w-auto object-contain"
                            />
                        </Link>
                        <p className="text-gray-400 leading-relaxed text-sm">
                            Cafe Beats ownership has a strong vision of becoming a most loved leisure cafe brand that spreads delicious products and service smiles across the globe.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <Facebook size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <Instagram size={18} />
                            </a>
                            <a href="#" className="w-10 h-10 bg-white/10 text-white rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300">
                                <Twitter size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-white text-lg font-display font-bold mb-6">Explore</h4>
                        <ul className="space-y-4 text-sm">
                            <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
                            <li><Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link></li>
                            <li><Link to="/products" className="text-gray-400 hover:text-primary transition-colors">Our Menu</Link></li>
                            <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link></li>
                            <li>
                                <a href="https://cafebeats.in/become-a-franchise/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors">
                                    Become a Franchise
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Order Online */}
                    <div>

                        <h4 className="text-white text-lg font-display font-bold mb-4">Our Outlets</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Surat · Mumbai · Vapi · Vadodara · Navsari · Daman · and more cities across India.
                        </p>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-white text-lg font-display font-bold mb-6">Get In Touch</h4>
                        <ul className="space-y-5 text-sm">
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-primary mt-0.5 flex-shrink-0" size={18} />
                                <span>G-11 Blue Stone Building, Shyamdham Mandir Chowk, Sarthana, Surat, Gujarat 395013</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" size={18} />
                                <a href="tel:+919924574894" className="hover:text-primary transition-colors">+91 99245 74894</a>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Phone className="text-primary flex-shrink-0" size={18} />
                                <div>
                                    <p className="text-xs text-primary mb-0.5">Franchise Inquiry:</p>
                                    <a href="tel:+919913666555" className="hover:text-primary transition-colors">+91 99136 66555</a>
                                </div>
                            </li>
                            <li className="flex items-center gap-3 text-gray-400">
                                <Mail className="text-primary flex-shrink-0" size={18} />
                                <a href="mailto:info@cafebeats.in" className="hover:text-primary transition-colors">info@cafebeats.in</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
                    <p className="text-gray-500">
                        &copy; {currentYear} Cafe Beats. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-gray-500">
                        <a href="https://cafebeats.in/privacy-policy/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="https://cafebeats.in/terms-conditions/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
