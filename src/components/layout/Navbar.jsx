import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 60);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Our Menu', path: '/products' },
        { name: 'Our Stores', path: '/our-stores' },
        { name: 'Contact Us', path: '/contact' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 bg-dark py-4 shadow-lg`}
        >
            <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
                {/* Logo */}
                <Link to="/" className="flex items-center">
                    <img
                        src="/cafebeats-423x201-white-logo.png"
                        alt="Cafebeats"
                        className="h-14 w-auto md:h-20 object-contain transition-transform hover:scale-105 drop-shadow-lg"
                        onError={(e) => {
                            e.target.onerror = null;
                            e.target.insertAdjacentHTML('afterend', '<span class="text-2xl font-display font-bold text-white">CafeBeats</span>');
                            e.target.style.display = 'none';
                        }}
                    />
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path.startsWith('/#') ? link.path.substring(1) : link.path}
                            onClick={(e) => {
                                if (link.path.startsWith('/#')) {
                                    e.preventDefault();
                                    const id = link.path.substring(2);
                                    if (window.location.pathname !== '/') {
                                        window.location.href = `/${link.path}`;
                                    } else {
                                        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }
                            }}
                            className={`relative font-medium transition-colors py-2 group text-sm tracking-wide ${location.pathname === link.path
                                ? 'text-primary'
                                : 'text-white/90 hover:text-primary'
                                }`}
                        >
                            {link.name}
                            <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                                }`}></span>
                        </Link>
                    ))}
                    <button className="relative p-2 text-white/80 hover:text-primary transition-colors">
                        <ShoppingCart size={22} />
                        <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                    </button>
                    <Link
                        to="/become-a-franchise"
                        className="bg-primary hover:bg-primary-light text-white text-sm font-semibold px-5 py-2 rounded-full transition-all duration-300 transform hover:scale-105"
                    >
                        Become a Franchise
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center space-x-3">
                    <button className="relative p-2 text-white/80">
                        <ShoppingCart size={22} />
                        <span className="absolute top-0 right-0 bg-primary text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full">
                            0
                        </span>
                    </button>
                    <button
                        className="p-2 text-white/80"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden absolute top-full left-0 w-full bg-dark/95 backdrop-blur-xl transition-all duration-500 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 py-6 border-t border-white/10' : 'max-h-0'
                    }`}
            >
                <div className="flex flex-col space-y-5 px-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`text-lg font-medium transition-colors ${location.pathname === link.path ? 'text-primary' : 'text-white/80 hover:text-primary'
                                }`}
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        to="/become-a-franchise"
                        className="bg-primary text-white font-semibold px-5 py-2 rounded-full text-center transition-colors hover:bg-primary-light"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Become a Franchise
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
