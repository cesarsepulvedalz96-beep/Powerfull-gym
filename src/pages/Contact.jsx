import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import "../styles/Contact.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "persona",
    subject: "",
    message: "",
  });

  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  // Formato teléfono Chile (+56 9XXXXXXXX)
  const formatPhone = (value) => {
    let numbers = value.replace(/\D/g, "");

    if (numbers.startsWith("56")) {
      numbers = numbers.slice(2);
    }

    if (numbers.length > 0 && numbers[0] !== "9") {
      numbers = "9" + numbers.slice(1);
    }

    numbers = numbers.slice(0, 9);

    if (numbers.length === 0) return "";

    return `+56 ${numbers}`;
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(form.name)) {
      newErrors.name = "El nombre solo debe contener letras.";
    }

    if (!/^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com)$/.test(form.email)) {
      newErrors.email = "Solo se permiten correos @gmail.com o @hotmail.com";
    }

    if (form.phone.length < 13) {
      newErrors.phone = "Ingrese un número válido.";
    }

    if (!form.subject) {
      newErrors.subject = "Seleccione un motivo.";
    }

    if (form.message.length < 10) {
      newErrors.message = "El mensaje debe tener al menos 10 caracteres.";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (!captchaValue) {
      alert("Por favor verifica que no eres un robot.");
      return;
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Inicia animación de carga
    setLoading(true);

    // Simulación envío (2 segundos)
    setTimeout(() => {
      setLoading(false);
      setShowModal(true);

      setForm({
        name: "",
        email: "",
        phone: "",
        type: "persona",
        subject: "",
        message: "",
      });

      setCaptchaValue(null);
    }, 2000);
  };

  const handleChange = (e) => {
    if (e.target.name === "phone") {
      setForm({
        ...form,
        phone: formatPhone(e.target.value),
      });
    } else {
      setForm({
        ...form,
        [e.target.name]: e.target.value,
      });
    }
  };

  return (
    <section className="contact-section">
      {/* BANNER SUPERIOR */}
      <div className="contact-banner">
        <div className="contact-banner-overlay">
          <h2>Estamos para ayudarte</h2>
          <p>Contáctanos y responde tus dudas hoy mismo</p>
        </div>
      </div>

      <div className="contact-container">
        <h1 className="contact-title">Contáctanos</h1>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nombre Completo</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Teléfono</label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="+56 9XXXXXXXX"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Tipo de contacto</label>
            <select name="type" value={form.type} onChange={handleChange}>
              <option value="persona">Persona</option>
              <option value="empresa">Empresa (Convenio Corporativo)</option>
            </select>
          </div>

          <div className="form-group">
            <label>Motivo</label>
            <select name="subject" value={form.subject} onChange={handleChange}>
              <option value="">Seleccionar</option>
              <option value="info">Información de planes</option>
              <option value="entrenador">Entrenamiento personalizado</option>
              <option value="convenio">Convenio empresa</option>
              <option value="problemas">
                Problemas con mi membresía / pago
              </option>
              <option value="otro">Otro</option>
            </select>
            {errors.subject && <span className="error">{errors.subject}</span>}
          </div>

          <div className="form-group">
            <label>Mensaje</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
            />
            {errors.message && <span className="error">{errors.message}</span>}
          </div>

          <div className="captcha-container">
            <ReCAPTCHA
              sitekey="6LfxIG8sAAAAAFnuzQBduyeBaPu8R3LV4owXHDWN"
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>

          <button type="submit" className="contact-button" disabled={loading}>
            {loading ? <span className="spinner"></span> : "Enviar Mensaje"}
          </button>
        </form>
      </div>

      {/* MODAL DE CONFIRMACIÓN */}
      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>¡Gracias por contactarnos! 💪</h2>
            <p>
              Hemos recibido tu mensaje correctamente. Nuestro equipo de
              PowerFull se pondrá en contacto contigo lo antes posible.
            </p>
            <button onClick={() => setShowModal(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}
