"use client";

import React from 'react';

interface CardProps {
  title: string;
  description: string;
}

const Card = ({ title, description }: CardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-8 w-80 h-80 flex flex-col justify-center items-center">
      <h3 className="text-2xl font-bold text-[#123265] mb-4">{title}</h3>
      <p className="text-gray-500 text-center">{description}</p>
    </div>
  );
};

export default Card;

