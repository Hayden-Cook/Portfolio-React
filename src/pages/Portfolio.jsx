import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

// Portfolio component. This will show the user a list of projects that I have worked on.
const Portfolio = () => {
    const projects = [
        {
            title: 'Tiny Steps',
            image: '/TinySteps.png',
            deployedLink: 'https://tiny-steps-baby-blog.onrender.com/',
            repoLink: 'https://github.com/agrove21/tiny-steps-baby-blog',
        },
        {
            title: 'Weather-Dash',
            image: '/WeatherDash.png',
            deployedLink: 'https://hayden-cook.github.io/Weather-Dash/',
            repoLink: 'https://github.com/Hayden-Cook/Weather-Dash',
        },
        {
            title: 'Project 3',
            image: 'project1.png',
            deployedLink: '',
            repoLink: '',
        },
        {
            title: 'Project 4',
            image: 'project1.png',
            deployedLink: '',
            repoLink: '',
        },
        {
            title: 'Project 5',
            image: 'project1.png',
            deployedLink: '',
            repoLink: '',
        },
        {
            title: 'Project 6',
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