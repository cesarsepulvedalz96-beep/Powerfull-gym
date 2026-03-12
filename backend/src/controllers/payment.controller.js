import { createFakeTransaction } from "../services/payment.service.js";

export const createPayment = async (req, res) => {
  try {
    const { amount,planName } = req.body;

    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Monto inválido" });
    }

    const transaction = await createFakeTransaction(amount, planName);

    res.json(transaction);

  } catch (error) {
    res.status(500).json({ error: "Error creando pago" });
  }
};
