import React from 'react';
import './Projects.css';
import projectImage1 from '../assets/01.PNG';
import projectImage2 from '../assets/02.jpg';
import projectImage3 from '../assets/03.PNG';
import projectImage4 from '../assets/04.PNG';

const ProjectCard = ({ title, description, image, githubLink, liveDemoLink }) => {
    return (
        <div className="project-card">
            <img src={image} alt={title} className="project-image" />
            <div className="project-details">
                <h3 className="project-title">{title}</h3>
                <p className="project-description">{description}</p>
                <div className="project-links">
                    <a href={githubLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        GitHub
                    </a>
                    <a href={liveDemoLink} className="project-link" target="_blank" rel="noopener noreferrer">
                        Live Demo
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="projects-section">
            <div className="projects-content">
                <ProjectCard
                    title="Real Estate Agency"
                    description="This is a website dedicated to a real estate agency, facilitating the sale and rental of houses and apartments."
                    image={projectImage1}
                    githubLink="https://github.com/tanguy-kabore/real-estate-agency"
                    liveDemoLink="https://real-estate-agency-eosin.vercel.app/"
                />
                <ProjectCard
                    title="FoodScan"
                    description="FoodScan is a mobile application designed with Flutter to help consumers make informed food decisions."
                    image={projectImage2}
                    githubLink="https://github.com/tanguy-kabore/food-scan"
                    liveDemoLink="https://github.com/tanguy-kabore/food-scan"
                />
                <ProjectCard
                    title="Lite Box"
                    description="Lite Box is a cloud storage solution for optimized file management with robust security features."
                    image={projectImage3}
                    githubLink="https://github.com/tanguy-kabore/lite-box"
                    liveDemoLink="https://lite-box-fawn.vercel.app/"
                />
                <ProjectCard
                    title="Lite Library"
                    description="Lite Library is a simple and fast online library built with React.js and Next.js."
                    image={projectImage4}
                    githubLink="https://github.com/tanguy-kabore/lite-library"
                    liveDemoLink="https://vercel.com/baowendneres-projects/lite-library"
                />
            </div>
        </section>
    );
};

export default Projects;
