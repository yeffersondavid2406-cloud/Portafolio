function Education() {
  const education = [
    {
      year: "2026",
      title: "Técnico Laboral en Soporte Tecnico en Tecnologia (Sistemas)",
      institution: "Corporación Internacional Elon Yireh",
      description:
        "Formación enfocada en el mantenimiento y soporte de equipos informáticos, instalación y configuración de software, manejo de redes y solución de problemas tecnológicos. Desarrollo de conocimientos en sistemas, bases de datos y herramientas digitales para brindar asistencia técnica y contribuir al buen funcionamiento de los recursos tecnológicos."
    }
  ];

  return (
    <section id="formacion" className="education section">
      <div className="section-container">

        <div className="section-title">
          <span>05.</span>
          <h2>Formación</h2>
        </div>

        <p className="section-description">
          Mi formación académica y los conocimientos que he adquirido
          durante mi proceso de aprendizaje.
        </p>

        <div className="education-list">

          {education.map((item, index) => (
            <article className="education-item" key={index}>

              <div className="education-year">
                {item.year}
              </div>

              <div className="education-content">
                <h3>{item.title}</h3>

                <h4>{item.institution}</h4>

                <p>{item.description}</p>
              </div>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;