import React, { useState } from 'react';
import './App.css';

// Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Your Name</h1>
        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>
    </nav>
  );
};

// Hero Section
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Python Developer & Learner</h1>
        <p>Building projects and mastering Python, one line of code at a time</p>
        <a href="#projects" className="cta-btn">View My Work</a>
      </div>
    </section>
  );
};

// About Section
const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About Me</h2>
        <p>
          I'm passionate about learning Python and building practical projects. 
          With a solid foundation in fundamentals like variables, functions, loops, 
          and conditionals, I'm now exploring more advanced concepts and creating 
          meaningful applications.
        </p>
        
        <div className="skills-container">
          <h3>Skills & Technologies</h3>
          <div className="skills">
            <span className="skill-tag">Python</span>
            <span className="skill-tag">Git & GitHub</span>
            <span className="skill-tag">Problem Solving</span>
            <span className="skill-tag">Object-Oriented Programming</span>
            <span className="skill-tag">Data Structures</span>
            <span className="skill-tag">File Handling</span>
            <span className="skill-tag">HTML & CSS</span>
            <span className="skill-tag">React</span>
          </div>
        </div>

        <div className="learning-journey">
          <h3>Learning Journey</h3>
          <ul>
            <li>✅ Python Fundamentals (variables, loops, conditionals)</li>
            <li>✅ Functions & Data Structures</li>
            <li>✅ Building Mini Projects (Calculator, Mad Libs, Converters)</li>
            <li>🔄 File Handling & Data Persistence</li>
            <li>🔄 Object-Oriented Programming</li>
            <li>🎯 Web Development (HTML, CSS, React)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// Projects Section
const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Calculator",
      description: "A command-line calculator that performs basic arithmetic operations with input validation.",
      tech: ["Python", "Functions", "User Input"],
      link: "https://github.com/heyypax/python/tree/main/projects"
    },
    {
      id: 2,
      title: "Mad Libs Game",
      description: "An interactive word game that creates funny, random stories by collecting user input.",
      tech: ["Python", "Strings", "User Input"],
      link: "https://github.com/heyypax/python/tree/main/projects"
    },
    {
      id: 3,
      title: "Temperature Converter",
      description: "Convert between Celsius, Fahrenheit, and Kelvin with precise calculations.",
      tech: ["Python", "Math", "Functions"],
      link: "https://github.com/heyypax/python/tree/main/projects"
    },
    {
      id: 4,
      title: "Weight Converter",
      description: "Convert between pounds, kilograms, ounces, and other weight units.",
      tech: ["Python", "Conditionals", "Functions"],
      link: "https://github.com/heyypax/python/tree/main/projects"
    },
    {
      id: 5,
      title: "To-Do List Manager",
      description: "Full-featured task manager with file persistence. Add, delete, and track tasks.",
      tech: ["Python", "File I/O", "Data Structures"],
      link: "https://github.com/heyypax/python"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "This portfolio! Built with React to showcase my projects and skills.",
      tech: ["React", "HTML", "CSS"],
      link: "https://github.com/heyypax/portfolio"
    }
  ];

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>My Projects</h2>
        <p className="section-subtitle">Here are some of my recent work and learning projects</p>
        
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              
              <div className="project-tech">
                {project.tech.map((tech, idx) => (
                  <span key={idx} className="tech-badge">{tech}</span>
                ))}
              </div>
              
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2>Get In Touch</h2>
        <p>Let's connect and build something great together!</p>
        
        <div className="contact-links">
          <a href="https://github.com/heyypax" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">💻</span>
            <span>GitHub</span>
          </a>
          <a href="mailto:your.email@example.com" className="contact-link">
            <span className="icon">📧</span>
            <span>Email</span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="contact-link">
            <span className="icon">💼</span>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2026 Your Name. All rights reserved.</p>
      <p>Built with React ⚛️</p>
    </footer>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}