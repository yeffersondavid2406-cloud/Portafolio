function Skills() {

  const skills = [
    {
      name: "HTML5",
      description: "Estructuración semántica de páginas web."
    },
    {
      name: "CSS3",
      description: "Diseño responsive, Flexbox, Grid y animaciones."
    },
    {
      name: "JavaScript",
      description: "Lógica, interacción y desarrollo de aplicaciones web."
    },
    {
      name: "React",
      description: "Creación de interfaces mediante componentes."
    },
    {
      name: "Node.js",
      description: "Desarrollo de aplicaciones y servicios backend."
    },
    {
      name: "Power Bi",
      description: "Creación de reportes, dashboards y visualizaciones para el análisis de datos."
    },
    {
      name: "Mysql",
      description: "Gestión de bases de datos relacionales, consultas SQL y administración de información"
    },
    {
      name: "PostgreSQL",
      description: "Diseño y gestión de bases de datos relacionales."
    },
    {
      name: "Git & GitHub",
      description: "Control de versiones y gestión de proyectos."
    },
    {
      name: "Flutter & Dart",
      description: "Desarrollo de aplicaciones multiplataforma."
    },
    {
      name: "Excel",
      description: "Diseño de tablas y gestion de bases de datos."
    }
  ];

  return (
    <section id="habilidades" className="skills section">

      <div className="section-container">

        <div className="section-title">
          <span>02.</span>
          <h2>Mis conocimientos</h2>
        </div>

        <p className="section-description">
          Tecnologías y herramientas que conozco y utilizo
          durante mi proceso de formación y desarrollo de proyectos.
        </p>

        <div className="skills-grid">

          {skills.map((skill) => (

            <article className="skill-card" key={skill.name}>

              <h3>{skill.name}</h3>

              <p>{skill.description}</p>

            </article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;