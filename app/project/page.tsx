import React from 'react';
import projects from '../components/Project/project';
import articles from '../components/Project/article';
import ProjectCard from '../components/Project/ProjectCard';
import Layout from '../components/Layout/Layout';
import ArticleCard from '../components/Project/ArticleCard';

const MyProjects = () => {
    return (
        <Layout>
            <div className='p-20'>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-40">
                    {articles.map((article, index) => (
                        <ArticleCard key={index} article={article} />
                    ))}
                </div>
            </div>
        </Layout>
    );
};

export default MyProjects;
