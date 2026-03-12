import { Link } from "react-router-dom";
import "../styles/PlansCarousel.css";

const plans = [
  {
    id: 1,
    name: "Power",
    price: "19.990 / mes",
    duration: "2 meses",
    description: "Acceso a todas las máquinas y áreas del gimnasio.",
    highlight: false,
    details: {
      "Acceso a más de 2.000 gimnasios en Chile y Latinoamérica": false,
      "5 invitaciones al mes en el gimnasio que quieras": false,
      "1 Pase VIP de 15 días para un amigo": false,
      "Smart Fit app – Tu plan de entrenamiento personalizado": true,
      "Smart Fit GO (entrenamientos en línea) en la aplicación": true,
      "Clases grupales con profesores - Actívate y baila": false,
      "Acceso a todas las áreas del gimnasio - peso libre, peso integrado, cardio y clases grupales": true,
    },
  },
  {
    id: 2,
    name: "PowerFull",
    price: "34.990 / mes",
    duration: "12 meses",
    description: "Acceso completo + todas las clases grupales.",
    highlight: true,
    details: {
      "Acceso a más de 2.000 gimnasios en Chile y Latinoamérica": true,
      "5 invitaciones al mes en el gimnasio que quieras": false,
      "1 Pase VIP de 15 días para un amigo": false,
      "Smart Fit app – Tu plan de entrenamiento personalizado": true,
      "Smart Fit GO (entrenamientos en línea) en la aplicación": true,
      "Clases grupales con profesores - Actívate y baila": true,
      "Acceso a todas las áreas del gimnasio - peso libre, peso integrado, cardio y clases grupales": true,
    },
  },
  {
    id: 3,
    name: "PowerFull Extreme",
    price: "49.990 / mes",
    duration: "12 meses",
    description: "Acceso VIP + clases + nutricionista + coach personal.",
    highlight: false,
    details: {
      "Acceso a más de 2.000 gimnasios en Chile y Latinoamérica": true,
      "5 invitaciones al mes en el gimnasio que quieras": true,
      "1 Pase VIP de 15 días para un amigo": true,
      "Smart Fit app – Tu plan de entrenamiento personalizado": true,
      "Smart Fit GO (entrenamientos en línea) en la aplicación": true,
      "Clases grupales con profesores - Actívate y baila": true,
      "Acceso a todas las áreas del gimnasio - peso libre, peso integrado, cardio y clases grupales": true,
    },
  },
];

export default function PlansCarousel() {
  return (
    <div className="columns is-multiline mt-6">
      {plans.map((plan) => (
        <div key={plan.id} className="column is-one-third">
          <div
            className={`card plan-card ${plan.highlight ? "most-chosen" : ""}`}
          >
            <div className="card-content">
              <p className="title">{plan.name}</p>
              <p className="subtitle">{plan.price}</p>
              <p>{plan.description}</p>
              <p className="mt-2">
                <strong>Duración:</strong> {plan.duration}
              </p>

              <ul className="mt-4 plan-details">
                {Object.entries(plan.details).map(
                  ([feature, available], index) => (
                    <li key={index} className="detail-item">
                      <span
                        className={
                          available ? "icon available" : "icon not-available"
                        }
                      >
                        {available ? "✓" : "✗"}
                      </span>{" "}
                      <span className="detail-text">{feature}</span>
                    </li>
                  ),
                )}
              </ul>

              {plan.highlight && (
                <span className="tag is-warning is-medium most-chosen-tag">
                  Más escogido
                </span>
              )}
            </div>

            <div className="card-footer">
              <Link
                to="/plans"
                state={{ selectedPlanId: plan.id }}
                className="button is-warning is-fullwidth plan-button"
              >
                ¡Inscríbete ya!
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
