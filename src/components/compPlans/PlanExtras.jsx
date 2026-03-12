import "../../stylesPlans/PlanExtras.css";

export default function PlanExtras({ extras, setExtras, selectedPlan }) {
  const isExtreme = selectedPlan?.id === 3;

  return (
    <div className="extras-section">
      <h2 className="title is-4">¿Quieres acelerar tus resultados?</h2>

      {/* COACH */}
      <label
        className={`extra-box ${extras.coach || isExtreme ? "active" : ""}`}
      >
        <input
          type="checkbox"
          disabled={isExtreme}
          checked={isExtreme ? true : extras.coach}
          onChange={() => setExtras({ ...extras, coach: !extras.coach })}
        />

        <div className="extra-info">
          <h4>Coach Personal</h4>
          <p>
            Plan de entrenamiento totalmente personalizado según tus objetivos,
            nivel físico y condición...
          </p>
          <span>{isExtreme ? "Incluido en tu plan" : "+ $11.900 / mes"}</span>
        </div>
      </label>

      {/* NUTRICION */}
      <label
        className={`extra-box ${extras.nutrition || isExtreme ? "active" : ""}`}
      >
        <input
          type="checkbox"
          disabled={isExtreme}
          checked={isExtreme ? true : extras.nutrition}
          onChange={() =>
            setExtras({ ...extras, nutrition: !extras.nutrition })
          }
        />

        <div className="extra-info">
          <h4>Nutricionista</h4>
          <p>Plan alimenticio personalizado según tus objetivos...</p>
          <span>{isExtreme ? "Incluido en tu plan" : "+ $8.900 / mes"}</span>
        </div>
      </label>
    </div>
  );
}
