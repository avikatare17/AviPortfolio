import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Handle scroll to update active section
    const handleScroll = () => {
      const sections = ['home', 'education', 'experience', 'projects', 'skills', 'contact'];
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
    { id: 'experience', label: 'Experience' },
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
        <div className="education-background">
          <div className="education-overlay"></div>
        </div>
        <div className="container">
          <h2 className="section-title education-title">Education</h2>
          <div className="education-container">
            <div className="education-card">
              <div className="education-header">
                <h3 className="education-degree">Master of Science in Computer Science</h3>
                <span className="education-dates">2020 - 2022</span>
              </div>
              <p className="education-institution">University Name</p>
              <p className="education-location">City, State</p>
              <p className="education-description">
                Focused on software engineering, data structures, and artificial intelligence. Completed thesis on machine learning applications in autonomous systems.
              </p>
            </div>
            <div className="education-card">
              <div className="education-header">
                <h3 className="education-degree">Bachelor of Science in Engineering</h3>
                <span className="education-dates">2016 - 2020</span>
              </div>
              <p className="education-institution">University Name</p>
              <p className="education-location">City, State</p>
              <p className="education-description">
                Majored in Computer Engineering with a focus on systems design and software development. Graduated with honors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="section experience-section">
        <div className="experience-background">
          <div className="experience-overlay"></div>
        </div>
        <div className="container">
          <h2 className="section-title experience-title">Experience</h2>
          <div className="experience-container">
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title-text">Plant Floor Systems Engineer</h3>
                <span className="experience-dates">2024 - Present</span>
              </div>
              <p className="experience-company">General Motors</p>
              <p className="experience-location">Location</p>
              <p className="experience-description">
                Working on plant floor systems, focusing on Automated Guided Vehicles (AGVs) and their navigation systems. Studying how AGVs make navigation decisions using cameras and developing smarter, self-recovering systems to reduce downtime.
              </p>
            </div>
            <div className="experience-card">
              <div className="experience-header">
                <h3 className="experience-title-text">Previous Position</h3>
                <span className="experience-dates">Start Year - End Year</span>
              </div>
              <p className="experience-company">Company Name</p>
              <p className="experience-location">City, State</p>
              <p className="experience-description">
                Description of your role, responsibilities, and achievements. Update this with your actual experience from LinkedIn.
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
          <div className="skills-chart-container">
            <div className="skills-chart">
              <div className="chart-y-axis">
                <span className="axis-label">Skills</span>
              </div>
              <div className="chart-content">
                <div className="chart-x-axis">
                  <span className="x-axis-label">0</span>
                  <span className="x-axis-label">0.5</span>
                  <span className="x-axis-label">1.0</span>
                  <span className="x-axis-label">1.5</span>
                  <span className="x-axis-label">2.0</span>
                  <span className="axis-label">Experience (Years)</span>
                </div>
                <div className="chart-bars">
                  <div className="skill-bar-row">
                    <span className="skill-label">Python</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '100%' }} data-years="2.0">
                        <span className="skill-value">2.0 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">SQL</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '75%' }} data-years="1.5">
                        <span className="skill-value">1.5 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">Databases</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '75%' }} data-years="1.5">
                        <span className="skill-value">1.5 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">PowerBI</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '75%' }} data-years="1.5">
                        <span className="skill-value">1.5 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">R</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '50%' }} data-years="1.0">
                        <span className="skill-value">1.0 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">Azure</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '25%' }} data-years="0.5">
                        <span className="skill-value">0.5 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">Tableau</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '25%' }} data-years="0.5">
                        <span className="skill-value">0.5 years</span>
                      </div>
                    </div>
                  </div>
                  <div className="skill-bar-row">
                    <span className="skill-label">SAS</span>
                    <div className="skill-bar-container">
                      <div className="skill-bar" style={{ width: '25%' }} data-years="0.5">
                        <span className="skill-value">0.5 years</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="chart-grid-lines">
                  <div className="grid-line" style={{ left: '0%' }}></div>
                  <div className="grid-line" style={{ left: '25%' }}></div>
                  <div className="grid-line" style={{ left: '50%' }}></div>
                  <div className="grid-line" style={{ left: '75%' }}></div>
                  <div className="grid-line" style={{ left: '100%' }}></div>
                </div>
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
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:akatare@purdue.edu" className="contact-link">akatare@purdue.edu</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">✉️</span>
                  <a href="mailto:avikatare17@gmail.com" className="contact-link">avikatare17@gmail.com</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <a href="tel:+14698883209" className="contact-link">469-888-3209</a>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">💼</span>
                  <a href="https://www.linkedin.com/in/avi-katare" target="_blank" rel="noopener noreferrer" className="contact-link">www.linkedin.com/in/avi-katare</a>
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
