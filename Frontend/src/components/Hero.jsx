
function Hero() {
    return (
      <section className="hero" id="home">
  
        <div className="hero-container">
  
          {/* Left Content */}
          <div className="hero-content">
  
            <div className="hero-badge">
              <span className="hero-status-dot"></span>
              Aspiring Full Stack Developer
            </div>
  
            <p className="hero-intro">HELLO, I'M</p>
  
            <h1>
              Hifza
              <br />
              <span>Sarwar.</span>
            </h1>
  
            <h2>
              Building Digital Experiences
              <span> With Code.</span>
            </h2>
  
            <p className="hero-description">
              I'm a Computer Science graduate passionate about
              building modern web applications using React.js
              and Python FastAPI. Currently seeking a Full Stack
              Developer Internship where I can learn, grow
              and build real-world solutions.
            </p>
  
            {/* Buttons */}
            <div className="hero-buttons">
  
              <a href="#projects" className="hero-btn-primary">
                View My Work
                <span>↗</span>
              </a>
  
              <a href="#contact" className="hero-btn-secondary">
                Let's Connect
              </a>
  
            </div>
  
           
  
          </div>
  
          {/* Right Visual */}
          <div className="hero-visual">
  
            <div className="hero-glow"></div>
  
            <div className="code-card">
  
              <div className="code-card-header">
                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
  
                <p>developer.js</p>
              </div>
  
              <div className="code-content">
  
                <p>
                  <span className="code-purple">const</span>{" "}
                  developer = {"{"}
                </p>
  
                <p className="code-indent">
                  name: <span className="code-green">'Hifza Sarwar'</span>,
                </p>
  
                <p className="code-indent">
                  role: <span className="code-green">'Full Stack Developer'</span>,
                </p>
  
                <p className="code-indent">
                  frontend: <span className="code-green">'React.js'</span>,
                </p>
  
                <p className="code-indent">
                  backend: <span className="code-green">'Python FastAPI'</span>,
                </p>
  
                <p className="code-indent">
                  passion: <span className="code-green">'Building & Learning'</span>
                </p>
  
                <p>{"}"}</p>
  
                <p className="code-comment">
                  // Turning ideas into reality.
                </p>
  
              </div>
  
              <div className="code-card-footer">
                <span className="code-online-dot"></span>
                Ready to build something great
              </div>
  
            </div>
  
            {/* Floating Tech Labels */}
            <div className="tech-float tech-react">
              ⚛ React.js
            </div>
  
            <div className="tech-float tech-python">
              🐍 Python
            </div>
  
            <div className="tech-float tech-api">
              ⚡ FastAPI
            </div>
  
          </div>
  
        </div>
  
        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span></span>
          Scroll to explore
        </div>
  
      </section>
    );
  }
  
  export default Hero;
  