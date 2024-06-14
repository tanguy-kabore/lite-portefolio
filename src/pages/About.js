import React from 'react';
import './About.css';
import profilePic from '../assets/about-me.jpg'; // Assurez-vous d'avoir une image de profil dans le dossier src/assets
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-content">
        <div className="about-image">
          <img src={profilePic} alt="B. Tanguy KABORE" />
        </div>
        <div className="about-text">
          <h2>About Me</h2>
          <p>I am a fullstack developer and also offer consulting services in the design and implementation of computer networks.</p>
          <ul className="about-details">
            <li><strong>Name:</strong> B. Tanguy KABORE</li>
            {/* <li><strong>Date of birth:</strong> January 01, 1987</li> */}
            <li><strong>Address:</strong> 11 BP 1853 CMS Ouaga 11</li>
            <li><strong>City:</strong> Ouagadougou</li>
            <li><strong>Email:</strong> baowendnere.kabore@gmail.com</li>
            <li><strong>Phone:</strong> +226 75643226</li>
          </ul>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/tanguy-kabore-96ab94298/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a href="https://github.com/tanguy-kabore" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href="mailto:baowendnere.kabore@gmail.com">
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
