function Certificates() {

  const certificates = [
    {
      id: 1,
      name: "I.A. Retos y Oportunidades de Negocio en Programación y Hardware",
      institution: "Elyon Yireh",
      date: "2025",
      description:
        "Certificado relacionado con inteligencia artificial, programación, hardware y oportunidades de negocio.",
      file: "/certificados/i.a. retos y oportunidades de negocio en programacion y hardware.pdf"
    },

    {
      id: 2,
      name: "Instalación y Manejo de Cámara de Seguridad",
      institution: "Elyon Yireh",
      date: "2026",
      description:
        "Certificado relacionado con la instalación, uso y manejo de cámaras de seguridad.",
      file: "/certificados/instalación y manejo de camara de seguridad.pdf"
    }
  ];

  return (
    <section
      id="certificados"
      className="certificates section"
    >

      <div className="section-container">

        <div className="section-title">
          <span>04.</span>
          <h2>Certificados</h2>
        </div>

        <p className="section-description">
          Formación y certificaciones que respaldan mis conocimientos
          y mi proceso de aprendizaje profesional.
        </p>

        <div className="certificates-grid">

          {certificates.map((certificate) => (

            <article
              className="certificate-card"
              key={certificate.id}
            >

              <div className="certificate-icon">
                PDF
              </div>

              <div className="certificate-content">

                <h3>
                  {certificate.name}
                </h3>

                <p>
                  {certificate.description}
                </p>

                <div className="certificate-info">

                  <span>
                    Institución
                  </span>

                  <strong>
                    {certificate.institution}
                  </strong>

                </div>

                <div className="certificate-info">

                  <span>
                    Fecha
                  </span>

                  <strong>
                    {certificate.date}
                  </strong>

                </div>

              </div>

              <a
                href={certificate.file}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-button"
              >
                Ver certificado
              </a>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Certificates;