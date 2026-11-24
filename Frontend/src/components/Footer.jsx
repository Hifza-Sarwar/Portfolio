
import { useEffect, useRef, useState } from "react";

function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className={`footer ${isVisible ? "is-visible" : ""}`}
      ref={footerRef}
    >
      <div className="footer-container">

        <div className="footer-main">

          <div className="footer-brand">
            <a href="#home" className="footer-logo">
              HS<span>.</span>
            </a>

            <p>
              Aspiring Full Stack Developer passionate
              about building modern web applications
              and creating meaningful digital experiences.
            </p>
          </div>

          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>

          <div className="footer-social">
            <h3>Connect With Me</h3>

            <a
              href="https://github.com/Hifza-Sarwar"
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>

            <a
              href="https://www.linkedin.com/in/hifza-sarwar/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn ↗
            </a>

              <a href="#contact">
                Email ↗
              </a>
          </div>

        </div>

        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Hifza Sarwar.
            All rights reserved.
          </p>

          <a href="#home" className="back-to-top">
            Back to Top ↑
          </a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
