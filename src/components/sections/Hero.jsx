import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
    {
        id: 1,
        image: '/slider-1.webp',
        fallback: '/slider-1.webp',
        headline: 'Coffee Factory',
        sub: 'CAFE BEATS OWNERSHIP HAS A STRONG VISION OF BECOMING A MOST LOVED LEISURE CAFE BRAND THAT SPREADS DELICIOUS PRODUCTS AND SERVICE SMILES ACROSS THE GLOBE',
        cta: { label: 'Explore Our Menu', to: '/products' },
    },
    {
        id: 2,
        image: '/slider-2.webp',
        fallback: '/slider-2.webp',
        headline: 'Coffee Heaven',
        sub: 'CAFE BEATS OWNERSHIP HAS A STRONG VISION OF BECOMING A MOST LOVED LEISURE CAFE BRAND THAT SPREADS DELICIOUS PRODUCTS AND SERVICE SMILES ACROSS THE GLOBE',
        cta: { label: 'Order on Swiggy', href: 'https://www.swiggy.com/restaurants/cafe-beats-nr-shyamdham-mandir-chowk-sarthana-surat-73530' },
    },
    {
        id: 3,
        image: '/slider-3.webp',
        fallback: '/slider-3.webp',
        headline: 'Coffee Masters',
        sub: 'CAFE BEATS OWNERSHIP HAS A STRONG VISION OF BECOMING A MOST LOVED LEISURE CAFE BRAND THAT SPREADS DELICIOUS PRODUCTS AND SERVICE SMILES ACROSS THE GLOBE',
        cta: { label: 'Franchise Enquiry', to: '/become-a-franchise' },
    }
];

const AUTOPLAY_DELAY = 5000;

const Hero = () => {
    const [current, setCurrent] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);
    const [direction, setDirection] = useState('next');

    const goTo = useCallback((index, dir = 'next') => {
        if (isAnimating) return;
        setDirection(dir);
        setIsAnimating(true);
        setTimeout(() => {
            setCurrent(index);
            setIsAnimating(false);
        }, 400);
    }, [isAnimating]);

    const next = useCallback(() => {
        goTo((current + 1) % slides.length, 'next');
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + slides.length) % slides.length, 'prev');
    }, [current, goTo]);

    // Autoplay
    useEffect(() => {
        const timer = setInterval(next, AUTOPLAY_DELAY);
        return () => clearInterval(timer);
    }, [next]);

    const slide = slides[current];

    return (
        <section className="relative min-h-screen w-full overflow-hidden flex items-center">
            {/* Background Images */}
            {slides.map((s, i) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img
                        src={s.image}
                        alt={s.headline}
                        className="w-full h-full object-cover"
                        onError={(e) => { e.target.src = s.fallback; }}
                    />
                    {/* Light black overlay per user request */}
                    <div className="absolute inset-0 bg-black/40"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 w-full">
                <div className="container mx-auto px-12 sm:px-16 md:px-24 lg:px-32 py-32">
                    <div
                        className={`max-w-2xl transition-all duration-500 ${isAnimating
                            ? direction === 'next' ? 'opacity-0 translate-x-8' : 'opacity-0 -translate-x-8'
                            : 'opacity-100 translate-x-0'
                            }`}
                    >
                        {/* Badge */}
                        <span className="inline-block px-3 py-1 md:px-4 md:py-1.5 bg-primary/20 border border-primary/40 text-primary font-semibold rounded-full text-[10px] md:text-xs uppercase tracking-[0.2em] mb-4 md:mb-6 backdrop-blur-sm">
                            Progressive Themed Café · Est. 2018
                        </span>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold text-white leading-tight mb-4 md:mb-6 drop-shadow-lg">
                            {slide.headline.split(' ').map((word, wi) => (
                                <span key={wi} className={wi === slide.headline.split(' ').length - 1 ? 'text-primary italic' : ''}>
                                    {word}{' '}
                                </span>
                            ))}
                        </h1>

                        {/* Subtext */}
                        <p className="text-base md:text-lg text-white/80 leading-relaxed mb-8 md:mb-10 max-w-xl pr-4">
                            {slide.sub}
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row flex-wrap gap-3 md:gap-4 pr-4">
                            {slide.cta.to ? (
                                <Link
                                    to={slide.cta.to}
                                    className="bg-primary hover:bg-primary-light text-white text-center font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                                >
                                    {slide.cta.label}
                                </Link>
                            ) : (
                                <a
                                    href={slide.cta.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-primary hover:bg-primary-light text-white text-center font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                                >
                                    {slide.cta.label}
                                </a>
                            )}
                            <a
                                href="https://www.zomato.com/surat/cafe-beats-nana-varachha"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="border-2 border-white/50 text-white hover:border-primary hover:text-primary text-center font-bold py-3 md:py-4 px-8 md:px-10 rounded-full transition-all duration-300 backdrop-blur-sm w-full sm:w-auto"
                            >
                                Order on Zomato
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Prev / Next Arrows */}
            <button
                onClick={prev}
                className="absolute left-4 md:left-8 z-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Previous slide"
            >
                <ChevronLeft size={22} />
            </button>
            <button
                onClick={next}
                className="absolute right-4 md:right-8 z-20 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-primary text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                aria-label="Next slide"
            >
                <ChevronRight size={22} />
            </button>

            {/* Slide Dots */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i, i > current ? 'next' : 'prev')}
                        className={`transition-all duration-300 rounded-full ${i === current
                            ? 'w-8 h-2 bg-primary'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>

            {/* Slide counter */}
            <div className="absolute bottom-8 right-6 md:right-12 z-20 text-white/50 text-sm font-mono">
                {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </div>
        </section>
    );
};

export default Hero;
