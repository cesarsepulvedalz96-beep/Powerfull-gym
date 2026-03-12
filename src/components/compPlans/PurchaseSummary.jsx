import "../../stylesPlans/PurchaseSummary.css";

export default function PurchaseSummary({ selectedPlan, extras }) {
  const coachPrice = extras.coach ? 11900 : 0;
  const nutritionPrice = extras.nutrition ? 8900 : 0;
  const planPrice = selectedPlan ? selectedPlan.price : 0;

  const totalMonthly = planPrice + coachPrice + nutritionPrice;

  // extrae número de meses desde "2 meses", "12 meses"
  const months = selectedPlan ? parseInt(selectedPlan.duration) : 0;

  return (
    <div className="purchase-summary">
      <h3>Resumen de compra</h3>

      {selectedPlan ? (
        <>
          <p>
            <strong>Plan:</strong> {selectedPlan.name}
          </p>

          {/* BENEFICIOS */}
          <div className="benefits-box">
            {selectedPlan.benefits.map((benefit, index) => (
              <div
                key={index}
                className={`benefit ${benefit.included ? "ok" : "no"}`}
              >
                <span className="icon">{benefit.included ? "✓" : "✗"}</span>
                <span className="text">{benefit.text}</span>
              </div>
            ))}
          </div>

          <hr />

          <p>Plan mensual: ${planPrice.toLocaleString()}</p>
          {extras.coach && <p>Coach personal: $11.900</p>}
          {extras.nutrition && <p>Nutrición: $8.900</p>}

          <hr />

          <p className="total">
            Total mensual: ${totalMonthly.toLocaleString()}
          </p>

          {/* DETALLE DE MENSUALIDADES CON CARRUSEL */}
          {months > 0 && (
            <div className="payment-details">
              <h4>Detalle de mensualidades</h4>

              <div className="months-carousel">
                {Array.from({ length: months }).map((_, i) => (
                  <div key={i} className="month-box">
                    <p className="month-title">Mes {i + 1}</p>

                    <div className="month-line">
                      <span>Plan {selectedPlan.name}</span>
                      <span>${planPrice.toLocaleString()}</span>
                    </div>

                    {extras.coach && (
                      <div className="month-line">
                        <span>Coach personal</span>
                        <span>$11.900</span>
                      </div>
                    )}

                    {extras.nutrition && (
                      <div className="month-line">
                        <span>Nutrición</span>
                        <span>$8.900</span>
                      </div>
                    )}

                    <div className="month-total">
                      Total mes: ${totalMonthly.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>

              <div className="contract-total">
                Total contrato ({months} meses): $
                {(totalMonthly * months).toLocaleString()}
              </div>
            </div>
          )}
        </>
      ) : (
        <p>Selecciona un plan para continuar</p>
      )}
    </div>
  );
}
