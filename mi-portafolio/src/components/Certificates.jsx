function Certificates() {

  const certificates = [
    {
      id: 1,
      name: "Desarrollo Web",
      institution: "Nombre de la institución",
      date: "2026",
      description:
        "Certificado relacionado con desarrollo y tecnologías web.",
      file: "/certificados/desarrollo-web.pdf"
    },

    {
      id: 2,
      name: "JavaScript",
      institution: "Nombre de la institución",
      date: "2026",
      description:
        "Certificado relacionado con programación y JavaScript.",
      file: "/certificados/javascript.pdf"
    },

    {
      id: 3,
      name: "Bases de Datos",
      institution: "Nombre de la institución",
      date: "2026",
      description:
        "Certificado relacionado con bases de datos y SQL.",
      file: "/certificados/bases-datos.pdf"
    }
  ];

  return (
    <section id="certificados" className="certificates section">

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