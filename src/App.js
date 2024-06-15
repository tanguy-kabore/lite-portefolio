import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Resume from './pages/Resume';
import School from './pages/School';
import Services from './pages/Services';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <section id="home" className="section">
          <Home />
        </section>
        <section id="about" className="section">
          <About />
        </section>
        <section id="resume" className="section">
          <h1>Resume</h1>
          <Resume />
        </section>
        <section id="resume" className="section">
          <h1>Schooling</h1>
          <School />
        </section>
        <section id="services" className="section">
          <h1>Services</h1>
          <Services />
        </section>
        <section id="skills" className="section">
          <h1>Skills</h1>
          <Skills />
        </section>
        <section id="projects" className="section">
          <h1>Projects</h1>
          <Projects />
        </section>
        {/* <section id="myblog" className="section">
          <h2>My Blog</h2>
        </section> */}
        <section id="contact" className="section">
          <h1>Contact</h1>
          <Contact />
        </section>
      </div>
      <Footer />
    </div>
  );
}

export default App;
