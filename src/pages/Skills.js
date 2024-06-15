import React from 'react';
import './Skills.css'; // Assurez-vous que ce fichier CSS est correctement importé

// Importez vos images pour chaque compétence
import laravelIcon from '../assets/laravel-icon.png';
import reactIcon from '../assets/react-icon.png';
import flutterIcon from '../assets/flutter-icon.png';
import mysqlIcon from '../assets/mysql-icon.png';
import firebaseIcon from '../assets/firebase-icon.png';
import securityIcon from '../assets/security-icon.png';
import postgresIcon from '../assets/postgres-icon.png';
import oracleIcon from '../assets/oracle-icon.png';
import dockerIcon from '../assets/docker-icon.png';
import pythonIcon from '../assets/python-icon.png';
import scrumIcon from '../assets/scrum-icon.png';
import networkIcon from '../assets/network-icon.png'; // Ajoutez cette ligne
import gitIcon from '../assets/git-icon.png'; // Ajoutez cette ligne
import umlIcon from '../assets/uml-icon.png'; // Ajoutez cette ligne


const SkillItem = ({ title, percentage, icon }) => {
  return (
    <div className="skill-item">
      <div className="skill-details">
        <div className="skill-icon">
          <img src={icon} alt={`${title} Icon`} />
        </div>
        <h3>{title}</h3>
        <div className="skill-progress">
          <div className="skill-bar" style={{ width: `${percentage}%` }}>
            <span>{`${percentage}%`}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <div className="skills-content">
{/*         <p className="skills-description">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia
        </p> */}
        <div className="skills-list">
          <SkillItem title="Laravel" percentage={80} icon={laravelIcon} />
          <SkillItem title="React" percentage={70} icon={reactIcon} />
          <SkillItem title="Flutter" percentage={90} icon={flutterIcon} />
          <SkillItem title="MySQL" percentage={95} icon={mysqlIcon} />
          <SkillItem title="Firebase" percentage={95} icon={firebaseIcon} />
          <SkillItem title="Security" percentage={80} icon={securityIcon} />
          <SkillItem title="Postgres" percentage={85} icon={postgresIcon} />
          <SkillItem title="Oracle" percentage={85} icon={oracleIcon} />
          <SkillItem title="Docker" percentage={75} icon={dockerIcon} />
          <SkillItem title="Python" percentage={70} icon={pythonIcon} />
          <SkillItem title="Scrum" percentage={90} icon={scrumIcon} />
          <SkillItem title="Network" percentage={95} icon={networkIcon} /> {/* Ajoutez cette ligne */}
          <SkillItem title="Git" percentage={90} icon={gitIcon} /> {/* Ajoutez cette ligne */}
          <SkillItem title="UML" percentage={95} icon={umlIcon} /> {/* Ajoutez cette ligne */}
          {/* Ajoutez d'autres compétences au besoin */}
        </div>
      </div>
    </section>
  );
};

export default Skills;
