import "./Testimonials.css";

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2>What Our Clients Say</h2>

      <div className="testimonial-cards">
        <div className="t-card">
          <p>
            “AEVO delivered our project on time with excellent quality.
            Their development team is highly professional.”
          </p>
          <h4>— Ramesh Kumar</h4>
          <span>Startup Founder</span>
        </div>

        <div className="t-card">
          <p>
            “Great experience working with AEVO. Their MERN stack expertise
            helped scale our platform.”
          </p>
          <h4>— Anitha Sharma</h4>
          <span>Product Manager</span>
        </div>

        <div className="t-card">
          <p>
            “Clean UI, smooth delivery, and excellent support throughout
            the project lifecycle.”
          </p>
          <h4>— Karthik Raj</h4>
          <span>CTO</span>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
