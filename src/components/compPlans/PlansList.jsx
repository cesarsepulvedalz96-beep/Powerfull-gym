import "../../stylesPlans/PlansList.css";
import { FaTicketAlt } from "react-icons/fa"; // icono de ticket, puedes cambiar a FaHeart para like

export const plans = [
  {
    id: 1,
    name: "Plan Power",
    price: 19990,
    duration: "2 meses",
    enrollment: "Gratis",
    description: "Acceso completo al gimnasio.",
    benefits: [
      {
        text: "Acceso a más de 4 gimnasios en Chile y Latinoamérica",
        included: false,
      },
      {
        text: "5 invitaciones al mes en el gimnasio que quieras",
        included: false,
      },
      { text: "1 Pase VIP de 15 días para un amigo", included: false },
      {
        text: "Smart Fit app – Tu plan de entrenamiento personalizado",
        included: true,
      },
      { text: "Smart Fit GO (entrenamientos en línea)", included: true },
      { text: "Clases grupales con profesores", included: false },
      { text: "Acceso a todas las áreas del gimnasio", included: true },
    ],
  },
  {
    id: 2,
    name: "Plan PowerFull",
    price: 34990,
    duration: "12 meses",
    enrollment: "Gratis",
    description: "Acceso completo + todas las clases grupales.",
    benefits: [
      { text: "Acceso a más de 4 gimnasios", included: true },
      { text: "5 invitaciones al mes", included: false },
      { text: "1 Pase VIP de 15 días", included: false },
      { text: "Smart Fit app", included: true },
      { text: "Smart Fit GO", included: true },
      { text: "Clases grupales con profesores", included: true },
      { text: "Acceso a todas las áreas del gimnasio", included: true },
    ],
  },
  {
    id: 3,
    name: "PowerFull Extreme",
    price: 49990,
    duration: "12 meses",
    enrollment: "Gratis",
    description: "Todo incluido + coach y nutrición.",
    benefits: [
      { text: "Acceso a más de 4 gimnasios", included: true },
      { text: "5 invitaciones al mes", included: true },
      { text: "1 Pase VIP de 15 días", included: true },
      { text: "Smart Fit app", included: true },
      { text: "Smart Fit GO", included: true },
      { text: "Clases grupales con profesores", included: true },
      { text: "Acceso total + coach y nutrición", included: true },
    ],
  },
];

export default function PlansList({ selectedPlan, setSelectedPlan }) {
  return (
    <div className="plans-list">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`plan-box 
            ${plan.id === 2 ? "featured" : ""}
            ${selectedPlan?.id === plan.id ? "active" : ""}`}
          onClick={() => setSelectedPlan(plan)}
        >
          {plan.id === 2 && <span className="badge-popular">Más escogido</span>}

          <div className="plan-icon">
            <FaTicketAlt size={28} />
          </div>

          <div className="plan-info">
            <h3>{plan.name}</h3>
            <p className="price">${plan.price.toLocaleString()} / mes</p>

            <p>
              <strong>Duración:</strong> {plan.duration}
            </p>
            <p>
              <strong>Inscripción:</strong> {plan.enrollment}
            </p>
            <p className="desc">{plan.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
