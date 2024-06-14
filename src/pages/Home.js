import React from 'react';
import './Home.css';
import profilePic from '../assets/profile-pic.jpg'; // Assurez-vous d'avoir une image de profil dans le dossier src/assets

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h3>Hello,</h3>
          <h1>I'm B. Tanguy KABORE</h1>
          <p>Fullstack developer and computer network engineer.</p>
          <div className="home-buttons">
            <a href="#contact" className="btn">Hire Me</a>
            <a href="#projects" className="btn">My Work</a>
          </div>
        </div>
        <div className="home-image">
          <img src={profilePic} alt="B. Tanguy KABORE" />
        </div>
      </div>
    </section>
  );
};

export default Home;
