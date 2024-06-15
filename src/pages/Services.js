import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDesktop, faMobileAlt, faCode, faNetworkWired, faShieldAlt, faDatabase, faClipboardList } from '@fortawesome/free-solid-svg-icons';
import './Services.css'; // Assurez-vous d'avoir un fichier Services.css pour le style

const Services = () => {
    return (
        <section id="services" className="services-section">
            <div className="services-content">
                <p className="services-description">
                    I offer full services in web and mobile development, API design, network infrastructure, software engineering, database management, and assistance in writing specifications.
                </p>
                <div className="services-list">
                    <div className="service-item">
                        <FontAwesomeIcon icon={faDesktop} className="service-icon" />
                        <h3>Web Development</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faMobileAlt} className="service-icon" />
                        <h3>Mobile Development</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faCode} className="service-icon" />
                        <h3>API Development</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faNetworkWired} className="service-icon" />
                        <h3>Network Design and Development</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faShieldAlt} className="service-icon" />
                        <h3>Information Security</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faDatabase} className="service-icon" />
                        <h3>Database Management</h3>
                    </div>
                    <div className="service-item">
                        <FontAwesomeIcon icon={faClipboardList} className="service-icon" />
                        <h3>Assistance in Writing Specifications</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
