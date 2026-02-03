import "./About.css";

const About = () => {
  return (
    <section className="about">
      <h2>About AEVO Technology</h2>

      <p className="about-text">
        AEVO Technology is a fast-growing IT services company focused on
        delivering high-quality web and software solutions. We help startups
        and businesses transform their ideas into scalable digital products.
      </p>

      <div className="about-cards">
        <div className="about-card">
          <h3>Our Mission</h3>
          <p>
            To deliver reliable and innovative technology solutions that help
            businesses grow.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Vision</h3>
          <p>
            To become a trusted global technology partner for modern businesses.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Values</h3>
          <p>
            Quality, Transparency, Continuous Learning, and Customer Success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
