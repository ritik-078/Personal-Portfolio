import React from "react";
import Main from "../components/Main/Main";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";

function Home() {
  return (
    <div>
      <Main />
      <Projects />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
