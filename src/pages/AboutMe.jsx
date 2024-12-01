import React from 'react';
import '../styles/AboutMe.css';


// AboutMe component. This will show the user a picture and a short bio about myself.
const AboutMe = () => {
    return (
        <section>
            <h2>About Me</h2>
            <img src="/ProfilePic.png" alt="Hayden Cook's picture" />
            <p>I am a passionate full-stack software developer with a strong foundation in building dynamic, user-friendly web applications. Proficient in front-end technologies like React, JavaScript, HTML, and CSS, and skilled in back-end tools such as Node.js, Express.js, MongoDB, and SQL, I strive to build efficient digital solutions.
                My goal is to continuously learn, adapt, and contribute to innovative projects that solve real-world challenges. Whether it's collaborating with a team or going at problems independently, I am confident in my ability to deliver positive results. I look forward to leveraging my skills and experience to create meaningful applications that make a difference.
            </p>
        </section>
    );
};

export default AboutMe;
