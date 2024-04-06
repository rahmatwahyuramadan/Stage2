import React from 'react';

interface CardProps {
    imageSrc: string;
    title: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, title }) => {
    return (
        <div className="w-full max-w-sm bg-white border rounded-lg w-64">
            <img className="p-8 rounded-t-lg w-1/2 mx-auto" src={imageSrc} alt="product image" />
            <h5 className="mb-8 text-xl text-center font-semibold tracking-tight text-blue-900">{title}</h5>
        </div>
    );
};

export default Card;