import "./Contact.css";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <p className="subtitle">
        Get in touch with us for your business requirements
      </p>

      <form className="contact-form">
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email Address" />
        <textarea placeholder="Your Message"></textarea>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
