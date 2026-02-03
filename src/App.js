import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
    
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
