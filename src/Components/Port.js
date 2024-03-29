import React from 'react';

const Port = ({ image, title, description, ctaText, ctaLink }) => {
  return (
    <div className="rounded-lg bg-white drop-shadow-lg">
      {image && (
        <img className="w-[20%] h-48 object-cover" src={image} alt={title} />
      )}
      <div className="p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700 mt-2">{description}</p>
        {ctaLink && (
          <a href={ctaLink} className="text-blue-500 hover:text-blue-700 underline mt-4 inline-block">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Port;