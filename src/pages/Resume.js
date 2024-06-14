import React from 'react';
import './Resume.css'; // Assurez-vous d'avoir le fichier CSS Resume.css pour le stylage

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-content">
                <div className="resume-item">
                    <h2>Chief Information Officer</h2>
                    <p className="resume-date">2023-Present</p>
                    <p className="resume-description">
                        Responsible for overseeing the direction of information systems.
                    </p>
                    <p className="resume-institution">Ministry of Infrastructure and Decentralization, Ouagadougou</p>
                </div>
                <div className="resume-item">
                    <h2>Network and Systems Service Chief</h2>
                    <p className="resume-date">2020-2023</p>
                    <p className="resume-description">
                        Responsible for coordinating activities of the Network and Systems Service.
                    </p>
                    <p className="resume-institution">Ministry of Transport, Urban Mobility, and Road Safety, Ouagadougou</p>
                </div>
                <div className="resume-item">
                    <h2>Network and Systems Engineer</h2>
                    <p className="resume-date">2019-2020</p>
                    <p className="resume-description">
                        Network and Systems Engineer at the Directorate of Information Systems.
                    </p>
                    <p className="resume-institution">Ministry of Transport, Urban Mobility, and Road Safety, Ouagadougou</p>
                </div>
                <div className="resume-item">
                    <h2>PhD in Artificial Intelligence</h2>
                    <p className="resume-date">2022-2025</p>
                    <p className="resume-description">
                        Researching Artificial Intelligence for automatic recognition of human skin diseases.
                    </p>
                    <p className="resume-institution">Norbert Zongo University, Ouagadougou</p>
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

export default Resume;
