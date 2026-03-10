import React from 'react';

const SectionTitle = ({ title, subtitle, center = false, className = '' }) => {
    return (
        <div className={`mb-12 ${center ? 'text-center' : 'text-left'} ${className}`}>
            {subtitle && (
                <span className="text-primary font-bold uppercase tracking-[0.2em] text-sm mb-4 block animate-fade-in">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl font-display font-bold text-dark relative inline-block animate-slide-up">
                {title}
                <span className="absolute -bottom-4 left-0 w-24 h-1.5 bg-primary/20 rounded-full"></span>
            </h2>
        </div>
    );
};

export default SectionTitle;
