import React from 'react';
import '../styles/Resume.css';

// Resume component. This will show the user my resume and a list of my proficiencies.
const Resume = () => {
    return (
        <section>
            <h2>Resume</h2>
            <p>Insert a resume here...</p>
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
            </ul>
        </section>
    );
};

export default Resume;

// GO BACK AND ADD A RESUME TO THE RESUME PAGE. DECIDE BETWEEN A PDF OR A TEXT VERSION OF YOUR RESUME. USE ANCHOR TAG TO LINK TO THE RESUME FILE.