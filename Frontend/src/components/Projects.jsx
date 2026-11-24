import { FiEdit3, FiCloud, FiCoffee, FiBriefcase, FiShoppingCart} from "react-icons/fi";
import { useEffect, useRef, useState } from "react";

function Projects() {
  const sectionRef = useRef(null);
  const otherProjectsRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [otherProjectsVisible, setOtherProjectsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setOtherProjectsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (otherProjectsRef.current) {
      observer.observe(otherProjectsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const githubProfile = "https://github.com/Hifza-Sarwar?tab=repositories";

  const featuredProjects = [
    {
      number: "01",
      type: "FULL STACK PROJECT",
      title: "Student Management System",
      description:
        "A full-stack application to manage student records, attendance and academic information through an organized system.",
      technologies: [
        "React.js", "CSS", "Python", "FastAPI", "SQLAlchemy", "SQLite",
      ],
      features: [
        "Student Management",
        "Attendance Management",
        "Academic Records",
        "JWT Authentication",
      ],
      github: "https://github.com/Hifza-Sarwar/student-management-system",
      live: "https://student-management-system-us5g-hifza-sarwar.vercel.app/",
      image: "/images/student-management.png",
      visual: "student-visual",
    },
    {
      number: "02",
      type: "FULL STACK · TEAM PROJECT",
      title: "Rental Marketplace",
      description:
        "A rental marketplace where users can explore listings across different categories, including cars, electronics, homes, dresses and furniture.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      features: [
        "Multiple Rental Categories",
        "Browse Listings",
        "Listing Management",
        "Booking Interface",
      ],
      github: "https://github.com/Hifza-Sarwar/Rental-Marketplace-Web-Platform",
      live: "https://rental-marketplace-web-platform.vercel.app/",
      image: "/images/rental-marketplace.png",
      visual: "rental-visual",
    },
  ];

  const otherMainProjects = [
    {
      number: "03",
      title: "Quiz Application",
      type: "FRONTEND PROJECT",
      description:
        "A quiz application built with React.js to provide an interactive question-and-answer experience.",
      technologies: ["React.js"],
      github: "https://github.com/Hifza-Sarwar/quize-app",
      live: "https://quize-app-lac.vercel.app/",
      image: "/images/quiz-app.png",
      icon: <FiEdit3 />,

    },
    {
      number: "04",
      title: "Weather App",
      type: "PYTHON PROJECT",
      description:
        "A Python application that uses the Requests library to fetch weather information from an API.",
      technologies: ["Python", "Requests Library", "Weather API"],
      github: "https://github.com/Hifza-Sarwar/Weather-api",
      live: "https://weather-api-git-main-hifza-sarwar.vercel.app/docs",
      image: "/images/weather-app.png",
      icon: <FiCloud />,
    },
  ];

  const otherProjects = [
    {
      number: "05",
      title: "Restaurant Website",
      description: "A restaurant website created using HTML5.",
      technologies: ["HTML"],
      github: "https://github.com/Hifza-Sarwar/restaurant-website-html",
      live: "ADD_RESTAURANT_LIVE_LINK",
      image: "/images/restaurant.JPG",
      icon: <FiCoffee />, 
    },
    {
      number: "06",
      title: "Job Listing Website",
      description: "A simple job listing website built with HTML and CSS.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Hifza-Sarwar/job-portal-html-css",
      live: "https://job-portal-html-css.vercel.app/",
      image: "/images/job-portal.png",
      icon: <FiBriefcase />,
    },
    {
      number: "07",
      title: "Amazon Clone",
      description: "A frontend clone inspired by the Amazon shopping website.",
      technologies: ["HTML", "CSS"],
      github: "https://github.com/Hifza-Sarwar/amazon-clone",
      live: "https://online-shop-git-main-hifza-sarwar.vercel.app",
      image: "/images/amazon-clone.png",
      icon: <FiShoppingCart />,
    },
  ];

  const renderProjectLinks = (project) => (
    <div className="project-links">
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="project-link primary-link"
      >
        View on GitHub <span>↗</span>
      </a>

      <a
        href={project.live}
        target="_blank"
        rel="noreferrer"
        className="project-link secondary-link"
      >
        Live Demo <span>↗</span>
      </a>
    </div>
  );

  return (
    <section
      className={`projects ${isVisible ? "is-visible" : ""}`}
      id="projects"
      ref={sectionRef}
    >
      <div className="projects-container">
        <div className="projects-heading">
          <span className="projects-label">MY RECENT WORK</span>
          <h2>Featured <span>Projects.</span></h2>
          <p>
            A selection of projects where I turn ideas into practical
            applications.
          </p>
        </div>

        {/* Two Featured Projects */}
        <div className="featured-projects-grid">
          {featuredProjects.map((project) => (
            <article className="project-card featured-project-card" key={project.number}>
              <div className="project-top">
                <span className="project-type">{project.type}</span>
                <span className="project-number">{project.number}</span>
              </div>

              <div className={`project-visual ${project.visual}`}>
                <img
                  src={project.image}
                  alt={`${project.title} screenshot`}
                  className="project-real-image"
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-features">
                  {project.features.map((feature) => (
                    <span key={feature}>
                      <span className="feature-check">✓</span>
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="project-tech">
                  {project.technologies.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                {renderProjectLinks(project)}
              </div>
            </article>
          ))}
        </div>

        {/* Quiz and Weather */}
        <div className="other-main-projects">
          {otherMainProjects.map((project) => (
            <article className="small-project-card" key={project.number}>
              <div className="small-project-top">
                <span className="small-project-icon">{project.icon}</span>
                <span className="project-number">{project.number}</span>
              </div>

              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="small-project-image"
                loading="lazy"
              />

              <span className="project-type">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {renderProjectLinks(project)}
            </article>
          ))}
        </div>

        {/* Other Projects */}
        <div className="other-projects-heading">
          <span className="projects-label">MORE OF MY WORK</span>
          <h2>Other <span>Projects.</span></h2>
        </div>

        <div
          className={`other-projects-grid ${
            otherProjectsVisible ? "is-visible" : ""
          }`}
          ref={otherProjectsRef}
        >
          {otherProjects.map((project) => (
            <article className="other-project-card" key={project.number}>
              <div className="other-project-top">
                <span className="other-project-icon">{project.icon}</span>
                <span className="project-number">{project.number}</span>
              </div>

              <img
                src={project.image}
                alt={`${project.title} screenshot`}
                className="other-project-image"
                loading="lazy"
              />

              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {renderProjectLinks(project)}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;