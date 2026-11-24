
import { useEffect, useRef, useState } from "react";
import { FiMapPin, FiBookOpen,FiTrendingUp, FiZap } from "react-icons/fi";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.2,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`about ${isVisible ? "is-visible" : ""}`}
      id="about"
      ref={sectionRef}
    >
      <div className="about-container">

        <div className="about-heading">
          <span className="about-label">DISCOVER MY JOURNEY</span>
          <h2>About <span>Me.</span></h2>
          <p>
            Get to know more about my background, skills and passion for development.
          </p>
        </div>

        <div className="about-content">

          <div className="about-info">
            <div className="about-intro">
              <span className="intro-line"></span>
              <span>WHO I AM</span>
            </div>

            <h3>
              Turning ideas into <span>digital experiences.</span>
            </h3>

            <p>
              I'm Hifza Sarwar, a Computer Science graduate passionate about
              building modern and meaningful web applications.
            </p>

            <p>
              I work with React.js to create responsive user interfaces and
              Python FastAPI to develop backend services and APIs. I also
              have experience with SQLAlchemy, databases, Git and GitHub.
            </p>

            <p>
              I enjoy learning new technologies, solving problems and turning
              ideas into practical projects. I'm currently looking for a Full
              Stack Developer Internship where I can contribute, learn and grow.
            </p>

            <div className="about-details">
              <div className="about-detail">
                <div className="detail-icon"><FiMapPin/></div>
                <div>
                  <span>LOCATION</span>
                  <h4>Lahore, Pakistan</h4>
                </div>
              </div>

              <div className="about-detail">
                <div className="detail-icon"><FiBookOpen/></div>
                <div>
                  <span>DEGREE</span>
                  <h4>BS Computer Science</h4>
                </div>
              </div>
            </div>

            <a href="/Hifza-Sarwar-CV.pdf" download="Hifza-Sarwar-CV.pdf" className="about-cv-btn">              Download CV <span>↓</span>
            </a>
          </div>

          <div className="about-visual">
            <div className="about-decoration"></div>

            <div className="about-glass-card education-card">
              <div className="glass-card-top">
                <div className="glass-icon"><FiBookOpen/></div>
                <span className="card-number">01</span>
              </div>
              <span className="glass-category">EDUCATION</span>
              <h3>BS Computer Science</h3>
              <p className="education-university">
                University of the Punjab
              </p>
              <div className="education-bottom">
                <span>2022 — 2026</span>
                <span className="education-status">Completed</span>
              </div>
            </div>

            <div className="about-glass-card career-card">
              <div className="glass-card-top">
                <div className="glass-icon"><FiTrendingUp/></div>
                <span className="card-number">02</span>
              </div>
              <span className="glass-category">CAREER GOAL</span>
              <h3>Growing as a Developer</h3>
              <p>
                Seeking an opportunity to work on real-world projects and
                gain professional development experience.
              </p>
            </div>

            <div className="about-glass-card mindset-card">
              <div className="glass-card-top">
                <div className="glass-icon"><FiZap/></div>
                <span className="card-number">03</span>
              </div>
              <span className="glass-category">MY MINDSET</span>
              <h3>Learn. Build. Improve.</h3>
              <p>
                Focused on continuous learning, practical development and
                improving problem-solving skills.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
