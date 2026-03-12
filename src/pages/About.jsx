import { useNavigate } from "react-router-dom";
import "../styles/About.css";

export default function About() {
  const navigate = useNavigate();

  return (
    <section className="about-page">
      {/* HERO */}
      <div className="about-hero">
        <div className="hero-content">
          <h1>
            <span className="brand-highlight brand-yellow">PowerFull</span>
          </h1>
          <p>Disciplina. Fuerza. Resultados reales.</p>
        </div>
      </div>

      <div className="about-container">
        {/* HISTORIA */}
        <div className="about-grid">
          <div className="about-text">
            <h2>Nuestra Historia</h2>
            <p>
              PowerFull Gym fue creado con una misión clara: ofrecer un
              entrenamiento profesional, estructurado y enfocado en resultados
              reales.
            </p>
            <p>
              No somos un gimnasio tradicional. Somos un centro de rendimiento
              donde cada persona tiene un plan, seguimiento y objetivos claros.
            </p>
            <p>
              Desde nuestros inicios hemos trabajado con atletas, personas que
              buscan mejorar su salud y quienes desean transformar su físico de
              manera seria y disciplinada.
            </p>
          </div>

          <div className="image-box">INSTALACIONES PREMIUM</div>
        </div>

        {/* VALORES */}
        <h2 className="section-title">Nuestros Valores</h2>

        <div className="values-grid">
          <div className="value-card">
            <h4>Disciplina</h4>
            <p>La constancia es la base del progreso físico real.</p>
          </div>

          <div className="value-card">
            <h4>Compromiso</h4>
            <p>Nos involucramos en el proceso de cada miembro.</p>
          </div>

          <div className="value-card">
            <h4>Profesionalismo</h4>
            <p>Entrenadores certificados y planificación estructurada.</p>
          </div>

          <div className="value-card">
            <h4>Resultados</h4>
            <p>Medimos avances reales, no promesas vacías.</p>
          </div>
        </div>

        {/* ESTADÍSTICAS */}
        <div className="stats-section">
          <div className="stat-box">
            <h3>+1200</h3>
            <p>Socios activos</p>
          </div>

          <div className="stat-box">
            <h3>+15</h3>
            <p>Entrenadores certificados</p>
          </div>

          <div className="stat-box">
            <h3>8</h3>
            <p>Años de experiencia</p>
          </div>

          <div className="stat-box">
            <h3>98%</h3>
            <p>Satisfacción comprobada</p>
          </div>
        </div>

        {/* DIFERENCIALES */}
        <h2 className="section-title">¿Por qué elegirnos?</h2>

        <div className="benefits-grid">
          <div className="benefit-card">
            <img src="/images/seguimiento.png" alt="Seguimiento" />
            <h4>Seguimiento personalizado</h4>
            <p>Evaluaciones físicas periódicas y control de progreso.</p>
          </div>

          <div className="benefit-card">
            <img src="/images/apppower.png" alt="Seguimiento" />
            <h4>Tecnología y App exclusiva</h4>
            <p>Accede a tu plan, seguimiento y clases desde cualquier lugar.</p>
          </div>

          <div className="benefit-card">
            <img src="/images/motivado.png" alt="Seguimiento" />
            <h4>Comunidad motivadora</h4>
            <p>Entrena rodeado de personas con mentalidad de crecimiento.</p>
          </div>
        </div>

        {/* PROGRAMAS */}
        <h2 className="section-title">Nuestros Programas</h2>

        <div className="programs-grid">
          <div className="program-card">
            <h4>Entrenamiento de Fuerza</h4>
            <p>
              Programas estructurados para aumentar masa muscular, potencia y
              resistencia.
            </p>
          </div>

          <div className="program-card">
            <h4>HIIT & Funcional</h4>
            <p>
              Sesiones dinámicas de alta intensidad enfocadas en quema de grasa
              y rendimiento cardiovascular.
            </p>
          </div>

          <div className="program-card">
            <h4>Plan Nutricional</h4>
            <p>
              Asesoramiento nutricional personalizado para acompañar tu progreso
              físico.
            </p>
          </div>
        </div>

        {/* ENTRENADORES */}
        <h2 className="section-title">Nuestros Entrenadores</h2>

        <div className="trainers-grid">
          <div className="trainer-card">
            <div className="trainer-image">
              <img src="/images/juan.png" alt="Juan Perez" />
            </div>
            <h4>Juan Pérez</h4>
            <p>Especialista en Fuerza y Rendimiento Deportivo</p>
          </div>

          <div className="trainer-card">
            <div className="trainer-image">
              <img src="/images/cami.png" alt="Juan Perez" />
            </div>
            <h4>Camila Torres</h4>
            <p>Entrenamiento Funcional & Transformación Física</p>
          </div>

          <div className="trainer-card">
            <div className="trainer-image">
              <img src="/images/diego.png" alt="Juan Perez" />
            </div>
            <h4>Diego Morales</h4>
            <p>Preparador Físico y Rehabilitación Deportiva</p>
          </div>
        </div>

        <h2 className="section-title">Testimonios</h2>

        <div className="testimonials-section">
          <div className="carousel-track">
            {[
              {
                text: "En 6 meses cambié completamente mi físico y mi mentalidad.",
                name: "Andrés G.",
              },
              {
                text: "El mejor gimnasio en el que he entrenado.",
                name: "Fernanda R.",
              },
              {
                text: "Profesionales reales y resultados visibles.",
                name: "Marcelo T.",
              },
              {
                text: "Mi energía y confianza aumentaron enormemente.",
                name: "Carolina M.",
              },
              {
                text: "El seguimiento personalizado marca la diferencia.",
                name: "Luis P.",
              },
              {
                text: "Nunca había tenido resultados tan rápidos.",
                name: "Javiera S.",
              },
              {
                text: "Entrenadores muy atentos y preparados.",
                name: "Ricardo F.",
              },
              { text: "Ambiente motivador todos los días.", name: "Paula C." },
              {
                text: "Mi salud mejoró en todos los aspectos.",
                name: "Sebastián L.",
              },
              { text: "Disciplina y resultados reales.", name: "Daniela V." },
              {
                text: "Un antes y un después en mi vida.",
                name: "Cristian A.",
              },
              {
                text: "Vale completamente la inversión.",
                name: "Valentina R.",
              },
              { text: "Recomiendo PowerFull al 100%.", name: "Matías O." },
              {
                text: "Aquí realmente te enseñan a progresar.",
                name: "Ignacio B.",
              },
              {
                text: "Resultados medibles y profesionales.",
                name: "Camila T.",
              },
            ].map((t, index) => (
              <div className="testimonial-card" key={index}>
                <p>"{t.text}"</p>
                <span>- {t.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* FILOSOFÍA */}
        <div className="philosophy-section">
          <h2>Nuestra Filosofía</h2>
          <p>
            Creemos que el progreso verdadero nace de la constancia, la
            disciplina y el compromiso personal.
          </p>
          <p>
            Nuestro enfoque combina entrenamiento inteligente, seguimiento
            constante y una comunidad motivadora que impulsa resultados.
          </p>
          <p>
            En PowerFull no solo entrenas tu cuerpo, desarrollas mentalidad,
            carácter y resiliencia.
          </p>
        </div>

        {/* CTA */}
        <div className="about-cta">
          <h3>¿Listo para comenzar tu transformación?</h3>
          <p>
            Descubre nuestros planes y empieza hoy mismo a trabajar por tu mejor
            versión.
          </p>

          <button className="cta-button" onClick={() => navigate("/plans")}>
            Ver Planes
          </button>
        </div>
      </div>
    </section>
  );
}
