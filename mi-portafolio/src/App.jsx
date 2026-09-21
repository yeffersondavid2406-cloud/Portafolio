import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Education from "./components/Education";
import Contact from "./components/Contact";

function App() {

  useEffect(() => {

    // =========================
    // ANIMACIONES AL HACER SCROLL
    // =========================

    const elements = document.querySelectorAll(
      ".section, .skill-card, .project-card, .certificate-card, .education-item"
    );

    elements.forEach((element) => {
      element.classList.add("reveal");
    });

    const observer = new IntersectionObserver(
      (entries) => {

        entries.forEach((entry) => {

          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }

        });

      },
      {
        threshold: 0.12
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });


    // =========================
    // NAVBAR AL HACER SCROLL
    // =========================

    const navbar = document.querySelector(".navbar");

    const handleScroll = () => {

      if (window.scrollY > 50) {
        navbar?.classList.add("scrolled");
      } else {
        navbar?.classList.remove("scrolled");
      }

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();


    // =========================
    // LIMPIEZA
    // =========================

    return () => {

      observer.disconnect();

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);


  return (
    <>
      <Navbar />

      <main>

        <Hero />

        <About />

        <Skills />

        <Projects />

        <Certificates />

        <Education />

        <Contact />

      </main>
    </>
  );
}

export default App;