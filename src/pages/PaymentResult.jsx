import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/PaymentResult.css";

export default function PaymentResult() {
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const status = params.get("status");
  const tx = params.get("tx");

  const [phase, setPhase] = useState("loading");
  // loading → result

  const [countdown, setCountdown] = useState(5);

  const isSuccess = status === "success";

  /* ========================= */
  /* FASE 1 → CARGA 5 SEGUNDOS */
  /* ========================= */
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPhase("result");
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  /* ========================= */
  /* FASE 2 → COUNTDOWN + REDIRECCIÓN */
  /* ========================= */
  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setPhase("result");
    }, 5000);

    return () => clearTimeout(loadingTimer);
  }, []);

  /* ========================= */
  /* FASE 2 → COUNTDOWN + REDIRECCIÓN */
  /* SOLO cuando phase === result */
  /* ========================= */
  useEffect(() => {
    if (phase !== "result") return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000);

    const timer = setTimeout(() => {
      if (status === "success") {
        navigate(
          `/receipt?tx=${tx}&plan=${params.get("plan")}&amount=${params.get("amount")}&method=${params.get("method")}&bank=${params.get("bank")}&installments=${params.get("installments")}`,
        );
      } else {
        navigate("/plans");
      }
    }, 5000);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, [phase, navigate, status, tx, params]);

  return (
    <div className="result-container">
      {phase === "loading" ? (
        /* ========================= */
        /* PANTALLA DE CARGA */
        /* ========================= */
        <div className="result-card loading">
          <div className="spinner"></div>
          <h2>Confirmando transacción...</h2>
          <p className="description">Estamos validando tu pago con el banco.</p>
        </div>
      ) : (
        /* ========================= */
        /* RESULTADO FINAL */
        /* ========================= */
        <div className={`result-card ${isSuccess ? "success" : "error"}`}>
          <div className="icon-wrapper">
            {isSuccess ? (
              <div className="checkmark"></div>
            ) : (
              <div className="error-mark">✕</div>
            )}
          </div>

          <h2>{isSuccess ? "Pago aprobado" : "Pago rechazado"}</h2>

          <p className="description">
            {isSuccess
              ? "Tu pago fue procesado correctamente. Gracias por confiar en nosotros."
              : "Hubo un problema con la transacción. Inténtalo nuevamente o utiliza otro método de pago."}
          </p>

          {tx && <p className="tx-id">ID Transacción: {tx}</p>}

          <p className="redirect">Redirigiendo en {countdown} segundos...</p>
        </div>
      )}
    </div>
  );
}
