import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PlansList from "../components/compPlans/PlansList";
import PlanExtras from "../components/compPlans/PlanExtras";
import PurchaseSummary from "../components/compPlans/PurchaseSummary";
import SubscriptionCheckout from "../components/compPlans/SubscriptionCheckout";
import { plans } from "../components/compPlans/PlansList";
import "../stylesPlans/PlansPage.css";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState(null);

  const [extras, setExtras] = useState({
    coach: false,
    nutrition: false,
  });

  const [step, setStep] = useState(1);
  const [paymentType, setPaymentType] = useState("monthly");
  const location = useLocation();

  /* ========================= */
  /* 🔥 SOLUCIÓN DEFINITIVA */
  /* ========================= */
  useEffect(() => {
    if (selectedPlan?.id === 3) {
      setExtras({
        coach: false,
        nutrition: false,
      });
    }
  }, [selectedPlan]);

  useEffect(() => {
    if (location.state?.selectedPlanId) {
      const id = location.state.selectedPlanId;
      const planFound = plans.find((p) => p.id === id);

      if (planFound) {
        setSelectedPlan(planFound);
      }
    }
  }, [location.state]);

  /* ========================= */

  if (step === 1) {
    return (
      <section className="plans-page">
        <div className="container">
          <h1 className="title has-text-centered mb-6">Selecciona tu plan</h1>

          <div className="plans-layout">
            <div className="plans-left">
              <PlansList
                selectedPlan={selectedPlan}
                setSelectedPlan={setSelectedPlan}
              />

              <PlanExtras
                extras={extras}
                setExtras={setExtras}
                selectedPlan={selectedPlan}
              />
            </div>

            <div>
              <PurchaseSummary
                selectedPlan={selectedPlan}
                extras={extras}
                paymentType={paymentType}
                setPaymentType={setPaymentType}
              />

              <button
                className="button is-warning is-fullwidth mt-4"
                disabled={!selectedPlan}
                onClick={() => setStep(2)}
              >
                Continuar inscripción
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <SubscriptionCheckout
      selectedPlan={selectedPlan}
      extras={extras}
      onCancel={() => setStep(1)}
    />
  );
}
