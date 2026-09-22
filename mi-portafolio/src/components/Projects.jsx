function Projects() {
  const projects = [
    {
      id: 1,
      title: "Everland",
      description:
        "Proyecto de comercio electrónico desarrollado para practicar la creación de una tienda online, gestión de productos, usuarios, carrito de compras y bases de datos.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
      ],
      type: "E-commerce",
      image: "/proyectos/everland.png",
      demo: "https://everland-plum.vercel.app/",
      github: "https://github.com/yeffersondavid2406-cloud/Everland.git"
    },

    {
      id: 2,
      title: "Sistema de Login",
      description:
        "Sistema de autenticación con registro e inicio de sesión de usuarios, validación de credenciales y control de acceso.",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "PHP",
        "MySQL"
      ],
      type: "Aplicación Web",
      image: "/proyectos/login.png",
      demo: "https://formulario-web-lilac.vercel.app/",
      github: "https://github.com/yeffersondavid2406-cloud/FormularioWEB.git"
    },

    {
      id: 3,
      title: "Cafeteria-Elyon",
      description:
        "Pagina web enfocada en la cafeteria de la institucion para facilitar a los clientes y personal de la cafeteria.",
      technologies: [
        "React",
      ],
      type: "Pagina web",
      image: "/proyectos/Cafeteria-Elyon.png",
      demo: "https://cafeteria-phi-ten.vercel.app/",
      github: "https://github.com/yeffersondavid2406-cloud/Cafeteria.git"
    },

    {
      id: 4,
      title: "BusBaq",
      description:
        "Aplicación enfocada en la información de las rutas del transporte público de Barranquilla.",
      technologies: [
        "React"
      ],
      type: "Página web",
      image: "/proyectos/bus-baq.png",
      demo: "https://bus-baq.vercel.app/",
      github: "https://github.com/yeffersondavid2406-cloud/BusBaq.git"
    }
  ];

  return (
    <section id="proyectos" className="projects section">

      <div className="section-container">

        <div className="section-title">
          <span>03.</span>
          <h2>Mis proyectos</h2>
        </div>

        <p className="section-description">
          Algunos de los proyectos que he desarrollado durante
          mi proceso de aprendizaje y formación.
        </p>

        <div className="projects-grid">

          {projects.map((project) => (
            <article
              className="project-card"
              key={project.id}
            >

              {/* Imagen */}
              <div className="project-image">
                <img
                  src={project.image}
                  alt={`Captura de ${project.title}`}
                />
              </div>

              {/* Información */}
              <div className="project-content">

                <div className="project-header">

                  <span className="project-number">
                    0{project.id}
                  </span>

                  <span className="project-type">
                    {project.type}
                  </span>

                </div>

                <h3>
                  {project.title}
                </h3>

                <p>
                  {project.description}
                </p>

                {/* Tecnologías */}
                <div className="project-technologies">

                  {project.technologies.map((technology) => (
                    <span key={technology}>
                      {technology}
                    </span>
                  ))}

                </div>

                {/* Botones */}
                <div className="project-buttons">

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button primary"
                  >
                    Ver proyecto
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button secondary"
                  >
                    GitHub
                  </a>

                </div>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;