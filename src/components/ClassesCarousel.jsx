import { useState, useEffect } from "react";
import "../styles/ClassesCarousel.css";

const classes = [
  {
    id: 1,
    name: "Yoga",
    image: "/images/yoga.png",
    description: "Relaja tu mente y cuerpo",
    fullDescription:
      "Clase enfocada en respiración, estiramientos y relajación profunda para reducir el estrés.",
    trainer: "María González",
    capacity: 20,
    schedule: "Lun - Mié - Vie | 08:00 AM",
  },
  {
    id: 2,
    name: "CrossFit",
    image: "/images/crossfit.png",
    description: "Entrenamiento funcional de alta intensidad",
    fullDescription:
      "Entrenamiento funcional que combina fuerza, resistencia y potencia.",
    trainer: "Andrés Silva",
    capacity: 18,
    schedule: "Mar - Jue | 19:00 PM",
  },
  {
    id: 3,
    name: "Pilates",
    image: "/images/pilates.png",
    description: "Fortalece tu core y mejora tu postura",
    fullDescription:
      "Trabajo enfocado en abdomen, estabilidad y corrección postural.",
    trainer: "Camila Rojas",
    capacity: 15,
    schedule: "Lun - Vie | 10:00 AM",
  },
  {
    id: 4,
    name: "Spinning",
    image: "/images/spinning.png",
    description: "Quema calorías al máximo ritmo",
    fullDescription:
      "Entrenamiento cardiovascular sobre bicicleta estática de alta intensidad.",
    trainer: "Javier Morales",
    capacity: 25,
    schedule: "Todos los días | 18:00 PM",
  },
  {
    id: 5,
    name: "Zumba",
    image: "/images/zumba.png",
    description: "Diversión, baile y cardio",
    fullDescription:
      "Clase dinámica de baile con ritmos latinos para quemar grasa mientras te diviertes.",
    trainer: "Fernanda López",
    capacity: 30,
    schedule: "Mar - Jue | 20:00 PM",
  },
  {
    id: 6,
    name: "Box Training",
    image: "/images/box.png",
    description: "Potencia, resistencia y técnica",
    fullDescription:
      "Entrenamiento de boxeo técnico y funcional para mejorar fuerza y coordinación.",
    trainer: "Carlos Muñoz",
    capacity: 12,
    schedule: "Sábados | 11:00 AM",
  },
];

export default function ClassesCarousel() {
  const [selectedClass, setSelectedClass] = useState(null);

  useEffect(() => {
    if (selectedClass) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedClass]);

  return (
    <>
      <div className="classes-grid">
        {classes.map((item) => (
          <div
            className="class-card"
            key={item.id}
            onClick={() => setSelectedClass(item)}
          >
            <div
              className="class-image"
              style={{ backgroundImage: `url(${item.image})` }}
            ></div>

            <div className="class-content">
              <h3>{item.name}</h3>
              <p className="class-desc">{item.description}</p>
              <p className="class-schedule">{item.schedule}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedClass && (
        <div className="modal-overlay" onClick={() => setSelectedClass(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedClass.name}</h2>

            <p className="modal-description">{selectedClass.fullDescription}</p>

            <div className="modal-info">
              <p>
                <strong>Entrenador:</strong> {selectedClass.trainer}
              </p>
              <p>
                <strong>Aforo máximo:</strong> {selectedClass.capacity} personas
              </p>
              <p>
                <strong>Horario:</strong> {selectedClass.schedule}
              </p>
            </div>

            <div className="reservation-section">
              <h4>Reserva tu cupo</h4>
              <p>A través de la App PowerFull</p>
              <p>Directamente en recepción</p>
            </div>

            <button
              className="modal-close-x"
              onClick={() => setSelectedClass(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </>
  );
}
