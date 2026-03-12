import { useSearchParams, useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import "../styles/Receipt.css";

export default function Receipt() {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  const tx = params.get("tx");
  const plan = params.get("plan");
  const amount = params.get("amount");
  const method = params.get("method") || "Crédito";
  const bank = params.get("bank") || "-";
  const installments = params.get("installments") || "1";

  const today = new Date().toLocaleString("es-CL");

  const downloadReceipt = () => {
    const doc = new jsPDF();

    const primary = [0, 0, 0];
    const accent = [0, 150, 90];

    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, 210, 297, "F");

    // Título
    doc.setFont("helvetica", "bold");
    doc.setFontSize(20);
    doc.text("COMPROBANTE DE PAGO", 105, 25, { align: "center" });

    // Línea
    doc.setDrawColor(0, 0, 0);
    doc.line(20, 35, 190, 35);

    doc.setFontSize(12);
    doc.setFont("helvetica", "normal");

    let y = 50;

    const row = (label, value) => {
      doc.setTextColor(...primary);
      doc.text(label, 25, y);
      doc.setFont("helvetica", "bold");
      doc.text(value, 185, y, { align: "right" });
      doc.setFont("helvetica", "normal");
      y += 12;
    };

    row("Plan:", plan);
    row("Monto mensual:", `$${Number(amount).toLocaleString("es-CL")}`);
    row("ID Transacción:", tx);
    row("Fecha:", today);
    row("Método de pago:", method);
    row("Banco:", bank);
    row("Cuotas:", installments);

    y += 10;

    // Estado destacado
    doc.setFillColor(230, 255, 240);
    doc.roundedRect(20, y, 170, 15, 4, 4, "F");

    doc.setTextColor(...accent);
    doc.setFont("helvetica", "bold");
    doc.text("ESTADO: APROBADO", 105, y + 10, { align: "center" });

    // Footer
    doc.setFontSize(10);
    doc.setTextColor(120);
    doc.text("Gracias por confiar en nuestro gimnasio.", 105, 280, {
      align: "center",
    });

    doc.save(`comprobante_${tx}.pdf`);
  };

  return (
    <div className="receipt-container">
      <div className="receipt-card">
        <div className="receipt-header">
          <div className="receipt-check">✓</div>
          <h2>Pago aprobado</h2>
          <p>Tu transacción fue procesada correctamente.</p>
        </div>

        <div className="receipt-details">
          <div className="receipt-row">
            <span>Plan</span>
            <span>{plan}</span>
          </div>

          <div className="receipt-row">
            <span>Monto mensual</span>
            <span>${Number(amount).toLocaleString("es-CL")}</span>
          </div>

          <div className="receipt-row">
            <span>ID Transacción</span>
            <span>{tx}</span>
          </div>

          <div className="receipt-row">
            <span>Fecha</span>
            <span>{today}</span>
          </div>

          <div className="receipt-row">
            <span>Método</span>
            <span>{method}</span>
          </div>

          <div className="receipt-row">
            <span>Banco</span>
            <span>{bank}</span>
          </div>

          <div className="receipt-row">
            <span>Cuotas</span>
            <span>{installments}</span>
          </div>

          <div className="receipt-row status">
            <span>Estado</span>
            <span>Aprobado</span>
          </div>
        </div>

        <div className="receipt-buttons">
          <button className="download-btn" onClick={downloadReceipt}>
            Descargar comprobante
          </button>

          <button className="home-btn" onClick={() => navigate("/")}>
            Volver al inicio
          </button>
        </div>
      </div>
    </div>
  );
}
