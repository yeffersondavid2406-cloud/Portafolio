function Hero() {
  return (
    <section id="inicio" className="hero">

      <div className="hero-content">

        <p className="hero-subtitle">
          Hola, soy
        </p>

        <h1>
          Yefferson David
        </h1>

        <h2>
          Desarrollador Web Junior
        </h2>

        <p className="hero-description">
          Soy estudiante y desarrollador en formación, apasionado
          por la tecnología y el desarrollo de aplicaciones web.
          Me interesa crear soluciones funcionales, aprender nuevas
          tecnologías y seguir creciendo profesionalmente.
        </p>

        <div className="hero-buttons">

          <a
            href="#proyectos"
            className="btn primary"
          >
            Ver proyectos
          </a>

          <a
            href="/cv/Hoja-de-Vida.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Ver CV
          </a>

          <a
            href="/cv/hoja-de-vida.pdf"
            download="Hoja-de-vida.pdf"
            className="btn secondary"
          >
            Descargar CV
          </a>

        </div>

      </div>

    </section>
  );
}

export default Hero;