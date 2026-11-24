import { useEffect, useRef, useState } from "react";
import { FiMonitor, FiServer, FiDatabase, FiTool } from "react-icons/fi";

function Skills() {
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

  const skillGroups = [
    {
      title: "Frontend Development",
      description: "Building responsive and interactive user interfaces.",
      skills: ["HTML", "CSS", "JavaScript", "React.js"],
      icon: <FiMonitor />,
    },
    {
      title: "Backend Development",
      description: "Developing APIs and server-side applications.",
      skills: ["Python", "FastAPI", "REST APIs", "JWT"],
      icon: <FiServer />,
    },
    {
      title: "Database",
      description: "Working with databases to store and manage data.",
      skills: ["SQLite", "SQLAlchemy ORM"],
      icon: <FiDatabase />,
    },
    {
      title: "Tools & Platforms",
      description: "Tools I use during development and collaboration.",
      skills: ["Git", "GitHub", "VS Code", "Postman", "Thunder Client", "Swagger UI"],
      icon: <FiTool />,
    },
  ];

  return (
    <section
      className={`skills ${isVisible ? "is-visible" : ""}`}
      id="skills"
      ref={sectionRef}
    >
      <div className="skills-container">
        <div className="skills-heading">
          <span className="skills-label">WHAT I WORK WITH</span>
          <h2>My Tech <span>Stack.</span></h2>
          <p>
            Technologies and tools I use to build modern web applications.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-card-top">
                <div className="skill-icon">{group.icon}</div>
                <span>0{index + 1}</span>
              </div>

              <h3>{group.title}</h3>
              <p>{group.description}</p>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;