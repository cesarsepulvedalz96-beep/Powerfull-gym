import { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import visaLogo from "../assets/visa.png";
import mastercardLogo from "../assets/mastercard.png";
import "../styles/FakeWebpay.css";

export default function FakeWebpay() {
  const navigate = useNavigate();
  const [params] = useSearchParams();

  const tx = params.get("tx");
  const amount = params.get("amount");
  const plan = params.get("plan");

  const [paymentMethod, setPaymentMethod] = useState("credit");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [bank, setBank] = useState("");
  const [installments, setInstallments] = useState("1");

  /* ========================= */
  /* FORMATOS */
  /* ========================= */

  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "");
    return (
      cleaned
        .match(/.{1,4}/g)
        ?.join(" ")
        .substring(0, 19) || ""
    );
  };

  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "");
    if (cleaned.length <= 2) return cleaned;
    return cleaned.substring(0, 2) + "/" + cleaned.substring(2, 4);
  };

  /* ========================= */
  /* PAGO */
  /* ========================= */

  const handlePay = () => {
    const cleanCard = cardNumber.replace(/\s/g, "");

    if (!cleanCard || !name) {
      alert("Completa los datos obligatorios");
      return;
    }

    if (paymentMethod === "credit") {
      if (cleanCard.length !== 16 || expiry.length !== 5 || cvv.length !== 3) {
        alert("Datos de crédito inválidos");
        return;
      }
    }

    if (paymentMethod === "debit") {
      if (!bank) {
        alert("Selecciona un banco");
        return;
      }
    }

    if (paymentMethod === "prepaid") {
      if (cvv.length !== 3) {
        alert("CVV inválido");
        return;
      }
    }

    /* SIMULACIÓN SIMPLE */
    const success = cleanCard.startsWith("4"); // Visa = éxito demo

    if (success) {
      navigate(
        `/payment-result?status=success&tx=${tx}&plan=${plan}&amount=${amount}&method=${paymentMethod}&bank=${bank}&installments=${installments}`,
      );
    } else {
      navigate(`/payment-result?status=error&tx=${tx}`);
    }
  };

  return (
    <div className="webpay-container">
      <div className="webpay-card">
        {/* ========================= */}
        {/* RESUMEN */}
        {/* ========================= */}

        <div className="payment-summary">
          <div>
            <h3>{plan}</h3>
            <p className="amount">${Number(amount).toLocaleString("es-CL")}</p>
            <span className="tx-id">ID: {tx}</span>
          </div>
          <span className="secure-badge">🔒 Pago seguro</span>
        </div>

        {/* ========================= */}
        {/* MÉTODOS */}
        {/* ========================= */}

        <div className="payment-methods">
          <div className="method-options">
            <div
              className={`method-card ${paymentMethod === "credit" ? "active" : ""}`}
              onClick={() => setPaymentMethod("credit")}
            >
              💳 Crédito
            </div>

            <div
              className={`method-card ${paymentMethod === "debit" ? "active" : ""}`}
              onClick={() => setPaymentMethod("debit")}
            >
              💳 Débito
            </div>

            <div
              className={`method-card ${paymentMethod === "prepaid" ? "active" : ""}`}
              onClick={() => setPaymentMethod("prepaid")}
            >
              💰 Prepago
            </div>
          </div>
        </div>

        {/* ========================= */}
        {/* CAMPOS COMUNES */}
        {/* ========================= */}

        <div className="form-group">
          <label>Número de tarjeta</label>
          <input
            type="text"
            maxLength="19"
            value={cardNumber}
            onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
            placeholder="1234 5678 9012 3456"
          />
        </div>

        <div className="form-group">
          <label>Nombre del titular</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nombre como aparece en la tarjeta"
          />
        </div>

        {/* ========================= */}
        {/* CRÉDITO */}
        {/* ========================= */}

        {paymentMethod === "credit" && (
          <>
            <div className="row">
              <div className="form-group">
                <label>Fecha vencimiento</label>
                <input
                  type="text"
                  maxLength="5"
                  value={expiry}
                  onChange={(e) => setExpiry(formatExpiry(e.target.value))}
                  placeholder="MM/AA"
                />
              </div>

              <div className="form-group">
                <label>CVV</label>
                <input
                  type="text"
                  maxLength="3"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
                  placeholder="123"
                />
              </div>
            </div>

            <div className="form-group">
              <label>Cuotas</label>
              <select
                value={installments}
                onChange={(e) => setInstallments(e.target.value)}
              >
                <option value="1">1 cuota</option>
                <option value="3">3 cuotas</option>
                <option value="6">6 cuotas</option>
                <option value="12">12 cuotas</option>
              </select>
            </div>
          </>
        )}

        {/* ========================= */}
        {/* DÉBITO */}
        {/* ========================= */}

        {paymentMethod === "debit" && (
          <div className="form-group">
            <label>Banco</label>
            <select value={bank} onChange={(e) => setBank(e.target.value)}>
              <option value="">Seleccionar banco</option>

              <optgroup label="Bancos tradicionales">
                <option>Banco de Chile</option>
                <option>Banco Estado</option>
                <option>Santander</option>
                <option>BCI</option>
                <option>Scotiabank</option>
                <option>Itaú</option>
                <option>Banco Security</option>
                <option>Banco Falabella</option>
                <option>Banco Ripley</option>
                <option>Banco Consorcio</option>
                <option>Banco Internacional</option>
                <option>Banco BICE</option>
                <option>Banco BTG Pactual</option>
                <option>Banco París</option>
                <option>HSBC Chile</option>
              </optgroup>

              <optgroup label="Cooperativas">
                <option>Coopeuch</option>
                <option>Detacoop</option>
                <option>Capual</option>
              </optgroup>

              <optgroup label="Fintech">
                <option>Tenpo</option>
                <option>Mach</option>
                <option>Cuenta FAN</option>
                <option>Chek</option>
                <option>Superdigital</option>
                <option>Global66</option>
              </optgroup>
            </select>
          </div>
        )}

        {/* ========================= */}
        {/* PREPAGO */}
        {/* ========================= */}

        {paymentMethod === "prepaid" && (
          <div className="form-group">
            <label>CVV</label>
            <input
              type="text"
              maxLength="3"
              value={cvv}
              onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))}
              placeholder="123"
            />
          </div>
        )}

        {/* ========================= */}
        {/* BOTONES */}
        {/* ========================= */}

        <div className="button-group">
          <button className="pay-button" onClick={handlePay}>
            Pagar ${Number(amount).toLocaleString("es-CL")}
          </button>

          <button className="cancel-button" onClick={() => navigate("/plans")}>
            Cancelar
          </button>
        </div>

        {/* ========================= */}
        {/* LOGOS */}
        {/* ========================= */}

        <div className="card-brands">
          <img src={visaLogo} alt="Visa" />
          <img src={mastercardLogo} alt="Mastercard" />
        </div>
      </div>
    </div>
  );
}
