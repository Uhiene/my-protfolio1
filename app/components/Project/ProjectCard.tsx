import Image, { StaticImageData } from 'next/image';
import React from 'react';

interface Project {
  name: string;
  image: StaticImageData;
  link: string;
  description: string;
}

interface ProjectCardProps {
  project: Project;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, className = '' }) => {
  return (
    <div className={`bg-white shadow-md rounded-md overflow-hidden ${className}`}>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <Image src={project.image} alt={project.name} className="w-full h-56" />
      </a>
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-2">{project.name}</h2>
        <p className="text-sm text-gray-600">{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline block mt-2">
          View Project
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
