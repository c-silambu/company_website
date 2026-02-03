import "./Careers.css";

const Careers = () => {
  return (
    <section className="careers">
      <h2>Careers at AEVO</h2>
      <p className="subtitle">
        Join our team and work on cutting-edge technologies
      </p>

      <div className="job-list">
        <div className="job-card">
          <h3>Frontend Developer Intern</h3>
          <p>Skills: React, HTML, CSS, JavaScript</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>MERN Stack Developer</h3>
          <p>Skills: MongoDB, Express, React, Node.js</p>
          <button>Apply Now</button>
        </div>

        <div className="job-card">
          <h3>UI / UX Designer</h3>
          <p>Skills: Figma, Adobe XD, User Research</p>
          <button>Apply Now</button>
        </div>
      </div>
    </section>
  );
};

export default Careers;
