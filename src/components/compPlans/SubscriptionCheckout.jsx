import { useState } from "react";
import "../../stylesPlans/SubscriptionCheckout.css";

export default function SubscriptionCheckout({
  selectedPlan,
  extras,
  onCancel,
}) {
  const [form, setForm] = useState({
    rut: "",
    name: "",
    email: "",
    gender: "",
    phone: "",
    birthDate: "",
    emergencyName: "",
    emergencyPhone: "",
    adsConsent: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [paymentMode, setPaymentMode] = useState("monthly");

  /* ========================= */
  /* FORMATEADORES AUTOMÁTICOS */
  /* ========================= */

  const formatRut = (value) => {
    let clean = value.replace(/[^0-9kK]/g, "").toUpperCase();

    if (clean.length <= 1) return clean;

    const body = clean.slice(0, -1);
    const dv = clean.slice(-1);

    const formattedBody =
      body
        .split("")
        .reverse()
        .join("")
        .match(/.{1,3}/g)
        ?.join(".")
        .split("")
        .reverse()
        .join("") || body;

    return `${formattedBody}-${dv}`;
  };

  const formatPhone = (value) => {
    let clean = value.replace(/\D/g, "");

    if (clean.startsWith("56")) {
      clean = clean.substring(2);
    }

    if (!clean.startsWith("9")) {
      clean = "9" + clean.replace(/^9*/, "");
    }

    clean = clean.substring(0, 9);

    return `+56 9${clean.substring(1)}`;
  };

  /* ========================= */
  /* VALIDADORES */
  /* ========================= */

  const validators = {
    rut: (v) =>
      /^\d{1,2}\.\d{3}\.\d{3}-[\dkK]$/.test(v) ||
      "RUT inválido (ej: 12.345.678-9)",

    name: (v) => v.trim() !== "" || "Campo obligatorio",

    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Correo no válido",

    gender: (v) => v !== "" || "Campo obligatorio",

    phone: (v) =>
      /^\+56\s9\d{8}$/.test(v) || "Formato inválido (ej: +56 912345678)",

    birthDate: (v) => v !== "" || "Campo obligatorio",

    emergencyPhone: (v) =>
      /^\+56\s9\d{8}$/.test(v) || "Formato inválido (ej: +56 912345678)",

    adsConsent: (v) => v !== "" || "Campo obligatorio",
  };

  /* ========================= */
  /* HANDLE CHANGE */
  /* ========================= */

  const handleChange = (e) => {
    let { name, value } = e.target;

    if (name === "rut") value = formatRut(value);
    if (name === "phone" || name === "emergencyPhone")
      value = formatPhone(value);

    setForm({ ...form, [name]: value });

    if (validators[name]) {
      const result = validators[name](value);
      setErrors({ ...errors, [name]: result === true ? null : result });
    }
  };

  const isFormValid = Object.keys(validators).every(
    (f) => validators[f](form[f]) === true,
  );

  /* ========================= */
  /* PRECIOS */
  /* ========================= */

  const coachPrice = extras.coach ? 11900 : 0;
  const nutritionPrice = extras.nutrition ? 8900 : 0;
  const planPrice = selectedPlan.price;
  const totalMonthly = planPrice + coachPrice + nutritionPrice;
  const months = parseInt(selectedPlan.duration);
  const totalAnnual = totalMonthly * months;
  const amountToPay = paymentMode === "annual" ? totalAnnual : totalMonthly;

  /* ========================= */
  /* SUBMIT */
  /* ========================= */

  const handleSubmit = async () => {
    if (!isFormValid) return;

    setLoading(true);

    try {
      const res = await fetch("http://localhost:3001/api/payment/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountToPay,
          planName: selectedPlan.name,
        }),
      });

      const data = await res.json();

      setTimeout(() => {
        setLoading(false);
        window.location.href = data.paymentUrl;
      }, 4000);
    } catch (error) {
      setLoading(false);
      alert("Error iniciando pago");
    }
  };

  const renderError = (f) =>
    errors[f] && <small style={{ color: "red" }}>{errors[f]}</small>;

  return (
    <section className="checkout-page">
      <div className="container checkout-layout">
        {/* FORM */}
        <div className="checkout-form">
          <h2>Completa los datos</h2>

          <input
            name="rut"
            value={form.rut}
            placeholder="RUT * (12.345.678-9)"
            onChange={handleChange}
            className={errors.rut ? "error" : ""}
            maxLength={12}
          />
          {renderError("rut")}
          <label>Nombre completo</label>
          <input
            name="name"
            value={form.name}
            placeholder="Maria Jose *"
            onChange={handleChange}
            className={errors.name ? "error" : ""}
          />
          {renderError("name")}

          <label>Correo electronico</label>
          <input
            name="email"
            value={form.email}
            placeholder="Maria@gmail.com *"
            onChange={handleChange}
            className={errors.email ? "error" : ""}
          />
          {renderError("email")}

          <label>Identidad de género</label>
          <select
            name="gender"
            value={form.gender}
            onChange={handleChange}
            className={errors.gender ? "error" : ""}
          >
            <option value="">Sexo *</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
          {renderError("gender")}

          <label>Numero de contacto</label>
          <input
            name="phone"
            value={form.phone}
            placeholder="Teléfono * (+56 912345678)"
            onChange={handleChange}
            className={errors.phone ? "error" : ""}
          />
          {renderError("phone")}

          <label>Fecha de nacimiento</label>
          <input
            type="date"
            name="birthDate"
            value={form.birthDate}
            onChange={handleChange}
            className={errors.birthDate ? "error" : ""}
          />
          {renderError("birthDate")}

          <label>Nombre de contacto</label>
          <input
            name="emergencyName"
            value={form.emergencyName}
            placeholder="Nombre de contacto emergencia"
            onChange={handleChange}
          />

          <label>Numero de emergencia</label>
          <input
            name="emergencyPhone"
            value={form.emergencyPhone}
            placeholder="Teléfono emergencia * (+56 912345678)"
            onChange={handleChange}
            className={errors.emergencyPhone ? "error" : ""}
          />
          {renderError("emergencyPhone")}

          {/* CONSENTIMIENTO */}
          <div
            className={`ads-consent ${errors.adsConsent ? "error-box" : ""}`}
          >
            <p className="ads-title">
              ¿Quieres que te enviemos descuentos, beneficios y promociones
              exclusivas a tu correo?
            </p>

            <div className="ads-options">
              <label>
                <input
                  type="radio"
                  name="adsConsent"
                  value="yes"
                  onChange={handleChange}
                />
                Sí
              </label>

              <label>
                <input
                  type="radio"
                  name="adsConsent"
                  value="no"
                  onChange={handleChange}
                />
                No
              </label>

              <div
                className={`ads-like ${
                  form.adsConsent === "yes"
                    ? "like-yes"
                    : form.adsConsent === "no"
                      ? "like-no"
                      : ""
                }`}
              >
                {form.adsConsent === "yes" && "✓"}
                {form.adsConsent === "no" && "✗"}
              </div>
            </div>

            {renderError("adsConsent")}
          </div>

          {/* BOTONES */}
          <div className="checkout-buttons">
            <button className="button is-warning" onClick={onCancel}>
              Cancelar
            </button>
            <button
              className="button is-warning"
              onClick={handleSubmit}
              disabled={!isFormValid}
            >
              Continuar
            </button>
          </div>
        </div>

        {/* RESUMEN */}
        <div className="checkout-summary">
          <h3>Detalle del plan</h3>

          <p>
            <strong>Plan:</strong> {selectedPlan.name}
          </p>
          <p>Plan mensual: ${planPrice.toLocaleString()}</p>

          {extras.coach && <p>Coach personal: $11.900</p>}
          {extras.nutrition && <p>Nutrición: $8.900</p>}

          {/* nuevo selector */}
          {months > 1 && (
            <div className="payment-mode-selector">
              <button
                type="button"
                className={paymentMode === "monthly" ? "active" : ""}
                onClick={() => setPaymentMode("monthly")}
              >
                pagar 1 mes
              </button>

              <button
                type="button"
                className={paymentMode === "annual" ? "active" : ""}
                onClick={() => setPaymentMode("annual")}
              >
                pagar {months} meses
              </button>
            </div>
          )}

          <hr />

          <p className="total">
            {paymentMode === "annual"
              ? `Total a pagar: $${totalAnnual.toLocaleString()}`
              : `Total mensual: $${totalMonthly.toLocaleString()}`}
          </p>

          <hr />
          <h4 className="months-title">Detalle de mensualidades</h4>

          <div className="months-list">
            {Array.from({ length: months }).map((_, i) => (
              <div key={i} className="month-card">
                <h5>Mes {i + 1}</h5>

                <div className="month-row">
                  <span>Plan {selectedPlan.name}</span>
                  <span>${planPrice.toLocaleString()}</span>
                </div>

                {extras.coach && (
                  <div className="month-row">
                    <span>Coach personal</span>
                    <span>$11.900</span>
                  </div>
                )}

                {extras.nutrition && (
                  <div className="month-row">
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

          <p className="contract-total">
            Total contrato ({months} meses):
            <span>${(totalMonthly * months).toLocaleString()}</span>
          </p>
        </div>
      </div>

      {/* MODAL DE CARGA */}
      {loading && (
        <div className="loading-overlay">
          <div className="loading-box">
            <div className="spinner"></div>
            <p>Redirigiendo a Webpay...</p>
            <p>solo prueba....</p>
          </div>
        </div>
      )}
    </section>
  );
}
