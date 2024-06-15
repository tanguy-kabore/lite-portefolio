import React from 'react';
import './Resume.css'; // Assurez-vous d'avoir le fichier CSS Resume.css pour le stylage

const School = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-content">
                <div className="resume-item">
                    <h2>PhD in Artificial Intelligence</h2>
                    <p className="resume-date">2022-2025</p>
                    <p className="resume-description">
                        Researching Artificial Intelligence for automatic recognition of human skin diseases.
                    </p>
                    <p className="resume-institution">Norbert Zongo University, Koudougou</p>
                </div>
                <div className="resume-item">
                    <h2>Software Engineering Engineer</h2>
                    <p className="resume-date">2023-2025</p>
                    <p className="resume-description">
                        Advanced engineering for digital service development.
                    </p>
                    <p className="resume-institution">National Institute of Posts and Telecommunications, Rabat</p>
                </div>
                <div className="resume-item">
                    <h2>Master's in Cybersecurity</h2>
                    <p className="resume-date">2017-2019</p>
                    <p className="resume-description">
                        Cybersecurity education.
                    </p>
                    <p className="resume-institution">Burkinabe Institute of Arts and Crafts, Ouagadougou</p>
                </div>
                <div className="resume-item">
                    <h2>Bachelor's Degree in Computer Networks and Systems</h2>
                    <p className="resume-date">2014-2017</p>
                    <p className="resume-description">
                        Education in computer networks and systems.
                    </p>
                    <p className="resume-institution">Higher Institute of Technologies, Ouagadougou</p>
                </div>
            </div>
        </section>
    );
};

export default School;
