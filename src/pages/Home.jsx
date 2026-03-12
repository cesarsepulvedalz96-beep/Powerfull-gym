import Carousel from "../components/Carousel";
import PlansCarousel from "../components/PlansCarousel";
import ClassesCarousel from "../components/ClassesCarousel";
import ServicesCarousel from "../components/ServicesCarousel";
import "../styles/home.css";

export default function Home() {
  return (
    <>
      <Carousel />

      {/* =========================
         SECCIÓN DE BIENVENIDA
      ========================== */}
      <section className="section home-welcome">
        <div className="welcome-overlay"></div>

        <div className="container welcome-content has-text-centered">
          <h2 className="title">
            Bienvenido a <span>POWERFULL</span>
          </h2>

          <p className="subtitle">
            Entrena en un ambiente profesional, moderno y diseñado para llevarte
            al siguiente nivel físico y mental.
          </p>

          <p className="welcome-text">
            En POWERFULL encontrarás equipamiento de última generación,
            entrenadores certificados, clases dinámicas y un espacio creado para
            que superes tus límites todos los días.
          </p>
        </div>
      </section>

      {/* =========================
   SECCIÓN AUSPICIADORES
========================= */}
      <section className="home-sponsors">
        <div className="sponsors-container">
          <h2 className="title">
            Nuestros <span className="has-text-warning">Auspiciadores</span>
          </h2>

          <div className="sponsors-slider">
            <div className="sponsors-track">
              <div className="sponsors-group">
                <img src="/imageslog/nike.png" alt="Nike" />
                <img src="/imageslog/adidas.png" alt="Adidas" />
                <img src="/imageslog/under.png" alt="Under Armour" />
                <img src="/imageslog/myprotein.png" alt="MyProtein" />
                <img src="/imageslog/reebok.png" alt="Reebok" />
              </div>
              <div className="sponsors-group">
                <img src="/imageslog/nike.png" alt="Nike" />
                <img src="/imageslog/adidas.png" alt="Adidas" />
                <img src="/imageslog/under.png" alt="Under Armour" />
                <img src="/imageslog/myprotein.png" alt="MyProtein" />
                <img src="/imageslog/reebok.png" alt="Reebok" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
         SECCIÓN DE PLANES
      ========================== */}
      <section className="section home-plans has-text-centered">
        <div className="container">
          <h2 className="title">
            POWERFULL tiene un plan para ti,{" "}
            <span className="has-text-warning">elige tu mejor opción</span>
          </h2>

          {/* Aquí usamos el componente dinámico */}
          <PlansCarousel />
        </div>
      </section>

      {/* =========================
         SECCIÓN DE CLASES
      ========================== */}
      <section className="section home-classes">
        <div className="container has-text-centered">
          <h2 className="title">
            Conoce nuestras clases exclusivas{" "}
            <span className="has-text-warning">POWERFULL</span>
          </h2>

          <p className="subtitle home-classes-subtitle">
            Entrenamientos guiados por profesionales para todos los niveles
          </p>

          <ClassesCarousel />
        </div>
      </section>

      {/* =========================
   SECCIÓN APP
========================= */}
      <section className="section home-app">
        <div className="app-overlay"></div>

        <div className="container columns is-vcentered app-content">
          <div className="column is-half">
            <h2 className="title">POWERFULL App: una experiencia completa</h2>
            <p>
              Entrena dentro y fuera del gimnasio con nuestra aplicación
              exclusiva.
            </p>

            <div className="app-downloads mt-4">
              <img src="/imagesApp/QR.png" alt="QR" className="app-qr" />
              <div className="app-stores">
                <a
                  href="https://play.google.com/store/games?hl=es_419"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/imagesApp/googleplay.png" alt="Google Play" />
                </a>
                <a
                  href="https://www.apple.com/cl/app-store/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src="/imagesApp/appstore.png" alt="App Store" />
                </a>
              </div>
            </div>
          </div>

          <div className="column is-half has-text-centered">
            <img
              src="/imagesApp/app.png"
              alt="App Mockup"
              className="app-mockup"
            />
          </div>
        </div>
      </section>

      {/* =========================
         SECCIÓN DE SERVICIOS
      ========================== */}
      <section className="section home-services">
        <div className="container has-text-centered">
          <h2 className="title">
            Conoce nuestros productos y servicios{" "}
            <span className="has-text-warning">adicionales</span>
          </h2>
          <ServicesCarousel />
        </div>
      </section>
    </>
  );
}
