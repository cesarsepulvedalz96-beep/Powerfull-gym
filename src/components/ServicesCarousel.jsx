import { useState, useEffect } from "react";
import "../styles/ServicesCarousel.css";

const services = [
  {
    id: 1,
    name: "Coach Personal",
    image: "/images/entrenador.png",
    description: "Asesoría 1 a 1 personalizada",
  },
  {
    id: 2,
    name: "Nutrición",
    image: "/images/nutri.png",
    description: "Planes alimenticios profesionales",
  },
  {
    id: 3,
    name: "Clases Especiales",
    image: "/images/especial.png",
    description: "Yoga, CrossFit, Zumba",
  },
  {
    id: 4,
    name: "Evaluación Física",
    image: "/images/nutricion.png",
    description: "Seguimiento de tu progreso",
  },
];

export default function ServicesCarousel() {
  const getVisibleCards = () => {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  };

  const [index, setIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(getVisibleCards());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCards(getVisibleCards());
      setIndex(0);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const next = () => {
    if (index < services.length - visibleCards) {
      setIndex(index + 1);
    }
  };

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <div className="services-carousel">
      <button className="carousel-arrow left" onClick={prev}>
        ❮
      </button>

      <div className="services-window">
        <div
          className="services-track"
          style={{
            transform: `translateX(-${index * 320}px)`,
          }}
        >
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <img src={service.image} alt={service.name} />
              <div className="service-text">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="carousel-arrow right" onClick={next}>
        ❯
      </button>
    </div>
  );
}
