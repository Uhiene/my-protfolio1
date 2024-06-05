import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface ArticleCardProps {
  article: {
    name: string;
    image: StaticImageData;
    link: string;
    description: string;
  };
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white">
      <a href={article.link} target="_blank" rel="noopener noreferrer">
        <Image src={article.image} alt={article.name} className="w-full h-48 object-cover" />
      </a>
      <div className="p-4">
        <h2 className="text-lg font-bold mb-2">{article.name}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          Read More
        </a>
      </div>
    </div>
  );
};

export default ArticleCard;
