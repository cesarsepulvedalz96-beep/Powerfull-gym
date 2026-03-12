import "../../stylesPlans/PlansSelector.css";

const plans = [
  {
    id: 1,
    name: "POWER",
    price: "$19.990",
    promo: "mensual por 2 meses",
    benefits: [
      "Acceso a todas las áreas del gimnasio",
      "App GYM PRO",
      "Entrenamientos online",
    ],
    featured: false,
    image: "/images/plan-power.jpg",
  },
  {
    id: 2,
    name: "POWER FULL",
    price: "$34.990",
    promo: "plan anual",
    benefits: [
      "Acceso a todas las sedes",
      "5 invitados al mes",
      "Pase VIP 15 días",
      "Clases grupales ilimitadas",
    ],
    featured: true,
    image: "/images/plan-power-full.jpg",
  },
  {
    id: 3,
    name: "POWER FULL EXTREME",
    price: "$49.990",
    promo: "todo incluido",
    benefits: ["Coach personal", "Nutricionista", "Acceso VIP"],
    featured: false,
    image: "/images/plan-power-extreme.jpg",
  },
];

export default function PlansSelector() {
  return (
    <div className="plans-selector">
      {plans.map((plan) => (
        <div
          key={plan.id}
          className={`plan-box ${plan.featured ? "featured" : ""}`}
          style={{ backgroundImage: `url(${plan.image})` }}
        >
          {plan.featured && <span className="badge">MÁS BENEFICIOS</span>}

          <div className="plan-overlay">
            <h2>{plan.name}</h2>
            <p className="price">{plan.price}</p>
            <p className="promo">{plan.promo}</p>

            <ul>
              {plan.benefits.map((b, i) => (
                <li key={i}>✓ {b}</li>
              ))}
            </ul>

            <button className="button is-warning is-fullwidth mt-4">
              Continuar inscripción
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
