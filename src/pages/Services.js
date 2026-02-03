import "./Services.css";

const Services = () => {
  return (
    <section className="services">
      <h2>Our Services</h2>
      

      <div className="service-cards">
        <div className="card">
          <h3>Web Development</h3>
          <p>
            Building responsive and scalable web applications using modern
            technologies.
          </p>
        </div>

        <div className="card">
          <h3>UI / UX Design</h3>
          <p>
            Creating user-friendly and visually appealing interface designs.
          </p>
        </div>

        <div className="card">
          <h3>MERN Stack Solutions</h3>
          <p>
            Full-stack development using MongoDB, Express, React, and Node.js.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
