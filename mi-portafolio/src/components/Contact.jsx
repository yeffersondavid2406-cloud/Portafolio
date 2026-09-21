function Contact() {
  return (
    <section id="contacto" className="contact section">

      <div className="section-container">

        <div className="section-title">
          <span>06.</span>
          <h2>Contacto</h2>
        </div>

        <div className="contact-content">

          <div className="contact-text">

            <h3>
              ¿Tienes un proyecto en mente?
            </h3>

            <p>
              Estoy interesado en oportunidades laborales,
              proyectos y nuevas experiencias que me permitan
              seguir desarrollándome profesionalmente.
            </p>

          </div>

          <div className="contact-links">

            <a href="mailto:Yeffersondavid2406@gmail.com">
              <span>Email</span>
              <strong>Yeffersondavid2406@gmail.com</strong>
            </a>

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>GitHub</span>
              <strong>Mi GitHub</strong>
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>LinkedIn</span>
              <strong>Mi LinkedIn</strong>
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Contact;