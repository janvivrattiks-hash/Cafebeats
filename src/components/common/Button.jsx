import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
    const variants = {
        primary: 'bg-primary hover:bg-primary-light text-white shadow-md hover:shadow-lg',
        secondary: 'bg-cream-dark hover:bg-primary text-dark hover:text-white',
        outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-white',
    };

    const baseStyles = 'inline-flex items-center justify-center py-3 px-8 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95 text-center cursor-pointer';

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
