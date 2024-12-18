import React from 'react';
import '../styles/Resume.css';

// Resume component. This will show the user my resume and a list of my proficiencies.
const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <p>You can view or download my resume by clicking the link below:</p>
            <a
                href="/Full-Stack-Resume2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-link"
            >
                View My Resume (PDF)
            </a>

            <h3>Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>SQL</li>
                <li>MongoDB</li>
                <li>APIs</li>
                <li>Git</li>
                <li>PWAs</li>
            </ul>
        </section>
    );
};

export default Resume;