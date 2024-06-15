import React from 'react';
import './Resume.css'; // Assurez-vous d'avoir le fichier CSS Resume.css pour le stylage

const Resume = () => {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-content">
                <div className="resume-item">
                    <h2>Chief Information Officer</h2>
                    <p className="resume-date">2023-Now</p>
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
            </div>
        </section>
    );
};

export default Resume;
