import React from 'react';
import Project from '../components/Project';

// Portfolio component. This will show the user a list of projects that I have worked on.
const Portfolio = () => {
    const projects = [
        {
            title: 'Project 1',
            image: 'project1.png',
            deployedLink: '',
            repoLink: '',
        },
        // COPY THIS OBJECT AND ADD MORE PROJECTS WHEN READY
    ];

    return (
        <section>
            <h2>Portfolio</h2>
            <div className="projects">
                {projects.map((project, index) => (
                    <Project key={index} {...project} />
                ))}
            </div>
        </section>
    );
};

export default Portfolio;