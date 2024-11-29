import React from 'react';

// This is the project component. This component will be used in the Portfolio component, and will display the project title, image, and links.
const Project = ({ title, image, deployedLink, repoLink }) => {
    return (
        <div className="project">
            <img src={image} alt={`${title} screenshot`} />
            <h3>{title}</h3>
            <div>
                <a href={deployedLink} target="_blank" rel="noopener noreferrer">Live App</a>
                <a href={repoLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
            </div>
        </div>
    );
};

export default Project;