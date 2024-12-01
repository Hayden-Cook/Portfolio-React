import React from 'react';
import '../styles/Resume.css';

// Resume component. This will show the user my resume and a list of my proficiencies.
const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <p>You can view or download my resume by clicking the link below:</p>
            <a
                href="/resume.pdf"
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

// GO BACK AND ADD A RESUME TO THE RESUME PAGE. DECIDE BETWEEN A PDF OR A TEXT VERSION OF YOUR RESUME. USE ANCHOR TAG TO LINK TO THE RESUME FILE.