import React from "react";
import Footer from "./components/Footer";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </React.Fragment>
  );
}

export default App;
