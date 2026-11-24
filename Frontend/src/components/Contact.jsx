
import { useEffect, useRef, useState } from "react";
import { FiMail, FiLinkedin, FiGithub, FiMapPin } from "react-icons/fi";

function Contact() {
  const sectionRef = useRef(null);

  const [isVisible, setIsVisible] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState("");

  // Scroll Animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Close popup with Escape key
  useEffect(() => {
    function handleEscape(e) {
      if (e.key === "Escape") {
        setIsFormOpen(false);
      }
    }

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // Handle Input Changes
  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value
    }));
  }

  // Open Contact Form
  function openForm() {
    setStatus("");
    setIsFormOpen(true);
  }

  // Submit Contact Form
  async function handleSubmit(e) {
    e.preventDefault();

    setIsSubmitting(true);
    setStatus("");

    try {
      const response = await fetch("http://127.0.0.1:8000/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.detail || "Something went wrong.");
      }

      setStatus("success");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");

    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section
      className={`contact ${isVisible ? "is-visible" : ""}`}
      id="contact"
      ref={sectionRef}
    >
      <div className="contact-wrapper">

        {/* LEFT SIDE */}

        <div className="contact-left">

          <p className="contact-label">CONTACT ME</p>

          <h2>
            Let's Build
            <span>Something Great.</span>
          </h2>

          <p className="contact-description">
            I'm actively looking for Full Stack Developer
            internship opportunities. If you're hiring or
            have an interesting project, I'd love to hear
            from you.
          </p>

          <button
            type="button"
            className="contact-button"
            onClick={openForm}
          >
            Send Me an Email
            <span>↗</span>
          </button>

        </div>

        {/* RIGHT SIDE */}

        <div className="contact-right">

          {/* EMAIL */}

          <div className="contact-info-card">
            <div className="contact-icon"><FiMail /></div>

            <div>
              <h4>Email</h4>

              <a href="mailto:hifzasarwar621@gmail.com">
                hifzasarwar621@gmail.com
              </a>
            </div>
          </div>

          {/* LINKEDIN */}

          <div className="contact-info-card">
            <div className="contact-icon"><FiLinkedin /></div>

            <div>
              <h4>LinkedIn</h4>

              <a
                href="https://www.linkedin.com/in/hifza-sarwar"
                target="_blank"
                rel="noreferrer"
              >
                Connect with me ↗
              </a>
            </div>
          </div>

          {/* GITHUB */}

          <div className="contact-info-card">
            <div className="contact-icon"><FiGithub /></div>

            <div>
              <h4>GitHub</h4>

              <a
                href="https://github.com/Hifza-Sarwar"
                target="_blank"
                rel="noreferrer"
              >
                View My GitHub Profile ↗
              </a>
            </div>
          </div>

          {/* LOCATION */}

          <div className="contact-info-card">
            <div className="contact-icon"><FiMapPin /></div>

            <div>
              <h4>Location</h4>
              <p>Lahore, Pakistan</p>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT FORM POPUP */}

      {isFormOpen && (
        <div
          className="contact-modal-overlay"
          onClick={() => setIsFormOpen(false)}
        >
          <div
            className="contact-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            onClick={(e) => e.stopPropagation()}
          >

            <button
              type="button"
              className="contact-modal-close"
              onClick={() => setIsFormOpen(false)}
              aria-label="Close form"
            >
              ×
            </button>

            <p className="contact-label">GET IN TOUCH</p>

            <h3 id="contact-modal-title">
              Send Me a <span>Message</span>
            </h3>

            <p className="contact-modal-description">
              Fill in the details below. I'll get your message
              directly in my inbox.
            </p>

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />

              <textarea
                name="message"
                placeholder="Write your message..."
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className="contact-button"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <span>↗</span>
              </button>

              {status === "success" && (
                <p className="form-success">
                  Message sent successfully! Thank you for contacting me.
                </p>
              )}

              {status === "error" && (
                <p className="form-error">
                  Message could not be sent. Please try again.
                </p>
              )}

            </form>
          </div>
        </div>
      )}

    </section>
  );
}

export default Contact;