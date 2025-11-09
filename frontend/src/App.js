import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'education', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <span>Avi</span>
          </div>
          <button 
            className="nav-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map(item => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={activeSection === item.id ? 'active' : ''}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Landing Page / Home Section */}
      <section id="home" className="section home-section">
        <div className="hero-background">
          <div className="hero-overlay"></div>
        </div>
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">AVI KATARE</h1>
            <p className="hero-subtitle">Plant Floor Systems Engineer at General Motors</p>
            <p className="hero-description">
              Data science, to me, feels like solving a giant, dynamic puzzle — where each dataset is a new challenge and every insight is a missing piece. It blends logic, creativity, and curiosity, much like artificial intelligence, which transforms these solved puzzles into systems that can learn, adapt, and optimize. I'm especially fascinated by Automated Guided Vehicles (AGVs); during my time at GM, I followed these machines around the plant floor, studying how they make navigation decisions using cameras and how they fault out when people get too close. While they currently require manual resets, I'm passionate about developing smarter, self-recovering systems to reduce downtime and prevent these robots from becoming factory bottlenecks. Outside of tech, I find joy in exploring the world — flying on aircraft like the A350, B777, ATR72, and more — and on the ground, I'm a devoted cricket fan, proudly cheering for Team India and the legendary MS Dhoni.
            </p>
            <div className="hero-buttons">
              <button 
                className="btn btn-primary" 
                onClick={() => scrollToSection('projects')}
              >
                View My Work
              </button>
              <button 
                className="btn btn-secondary" 
                onClick={() => scrollToSection('contact')}
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section education-section">
        <div className="container">
          <h2 className="section-title">Education</h2>
          <div className="education-grid">
            <div className="education-card">
              <div className="education-icon">🎓</div>
              <h3>Degree Name</h3>
              <p className="education-institution">Institution Name</p>
              <p className="education-period">Year - Year</p>
              <p className="education-description">
                Description of your degree, major, and key achievements.
              </p>
            </div>
            <div className="education-card">
              <div className="education-icon">📚</div>
              <h3>Additional Education</h3>
              <p className="education-institution">Institution Name</p>
              <p className="education-period">Year - Year</p>
              <p className="education-description">
                Certifications, courses, or additional training.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects-section">
        <div className="container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-image">📱</div>
              <h3>Project Name 1</h3>
              <p className="project-description">
                Brief description of the project, technologies used, and your role.
              </p>
              <div className="project-tech">
                <span className="tech-tag">React</span>
                <span className="tech-tag">Python</span>
                <span className="tech-tag">API</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">💻</div>
              <h3>Project Name 2</h3>
              <p className="project-description">
                Brief description of the project, technologies used, and your role.
              </p>
              <div className="project-tech">
                <span className="tech-tag">JavaScript</span>
                <span className="tech-tag">Node.js</span>
                <span className="tech-tag">Database</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-image">🚀</div>
              <h3>Project Name 3</h3>
              <p className="project-description">
                Brief description of the project, technologies used, and your role.
              </p>
              <div className="project-tech">
                <span className="tech-tag">Cloud</span>
                <span className="tech-tag">Docker</span>
                <span className="tech-tag">DevOps</span>
              </div>
              <div className="project-links">
                <a href="#" className="project-link">View Project</a>
                <a href="#" className="project-link">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills-section">
        <div className="container">
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skills-category">
              <h3>Frontend</h3>
              <div className="skills-list">
                <span className="skill-item">React</span>
                <span className="skill-item">JavaScript</span>
                <span className="skill-item">HTML/CSS</span>
                <span className="skill-item">TypeScript</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Backend</h3>
              <div className="skills-list">
                <span className="skill-item">Python</span>
                <span className="skill-item">FastAPI</span>
                <span className="skill-item">Node.js</span>
                <span className="skill-item">REST APIs</span>
              </div>
            </div>
            <div className="skills-category">
              <h3>Tools & Technologies</h3>
              <div className="skills-list">
                <span className="skill-item">Git</span>
                <span className="skill-item">Docker</span>
                <span className="skill-item">Cloud Run</span>
                <span className="skill-item">CI/CD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <p className="contact-description">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>your.email@example.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <span>LinkedIn Profile</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🐙</span>
                  <span>GitHub Profile</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (123) 456-7890</span>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Avi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
