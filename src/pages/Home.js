import "./Home.css";
import Services from "./Services";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
   
    <section className="hero">
      <div className="hero-content">
        <h1>
          Your world-class <br /> development <br /> team is here
        </h1>

        <p>
          AEVO Technology is a next-generation digital services and
          consulting company.
        </p>
      </div>
    </section>
    <Services />
    <Testimonials/>
    </>
     
  );
};

export default Home;
