import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Aos from "aos";
import "../styles/Carousel.css";

const slides = [
  {
    title: "Entrena Sin Límites",
    subtitle: "Fuerza • Disciplina • Resultados",
    motivation: "Cada día es una nueva oportunidad para ser más fuerte.",
    image: "/images/pesemano.png",
  },
  {
    title: "Planes Profesionales",
    subtitle: "Diseñados para tu objetivo",
    motivation: "El éxito se construye con constancia y enfoque.",
    image: "/images/abdomin.png",
  },
  {
    title: "Convierte Tu Cuerpo",
    subtitle: "Empieza hoy mismo",
    motivation: "Hoy es el primer paso hacia tu mejor versión.",
    image: "/images/uwu.png",
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, [index]);

  return (
    <section
      className="hero gym-carousel"
      style={{
        backgroundImage: `
          linear-gradient(
            rgba(0,0,0,0.7),
            rgba(0,0,0,0.85)
          ),
          url(${slides[index].image})
        `,
      }}
    >
      <div className="hero-body has-text-centered">
        <h1 className="title carousel-title">{slides[index].title}</h1>

        <p className="subtitle carousel-subtitle">{slides[index].subtitle}</p>

        <button
          className="button is-warning is-medium mt-4"
          data-aos="zoom-in"
          data-aos-delay="300"
          data-aos-duration="800"
          onClick={() => navigate("/plans")}
        >
          Únete Ahora
        </button>

        {/* Texto motivacional */}
        <p
          className="motivation"
          data-aos="fade-up"
          data-aos-delay="500"
          data-aos-duration="800"
        >
          {slides[index].motivation}
        </p>
      </div>
    </section>
  );
}
