import React from 'react';
import Project from '../components/Project';
import '../styles/Portfolio.css';

// Portfolio component. This will show the user a list of projects that I have worked on.
const Portfolio = () => {
    const projects = [
        {
            title: 'Gamer-Bud',
            image: '/Gamer-Bud.png',
            deployedLink: 'https://gamer-bud-fbdv.onrender.com/',
            repoLink: 'https://github.com/Teacher2Coder/gamer-bud',
        },
        {
            title: 'Tiny-Steps',
            image: '/TinySteps.png',
            deployedLink: 'https://tiny-steps-baby-blog.onrender.com/',
            repoLink: 'https://github.com/agrove21/tiny-steps-baby-blog',
        },
        {
            title: 'Express-Note-Taker',
            image: '/NoteTaker.png',
            deployedLink: 'https://challenge-11-204g.onrender.com/',
            repoLink: 'https://github.com/Hayden-Cook/Challenge-11',
        },
        {
            title: 'Weather-Dash',
            image: '/WeatherDash.png',
            deployedLink: 'https://hayden-cook.github.io/Weather-Dash/',
            repoLink: 'https://github.com/Hayden-Cook/Weather-Dash',
        },
        {
            title: 'Employee-Payroll-Tracker',
            image: '/PayrollTracker.png',
            deployedLink: 'https://hayden-cook.github.io/module-03-challenge/',
            repoLink: 'https://github.com/Hayden-Cook/module-03-challenge',
        },
        {
            title: 'Raining-Facts-&-Dogs',
            image: '/Facts&Dogs.png',
            deployedLink: 'https://nmck-sys.github.io/ProjectOne/',
            repoLink: 'https://github.com/nmck-sys/ProjectOne',
        },

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