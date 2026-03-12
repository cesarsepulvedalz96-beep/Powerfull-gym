export const createFakeTransaction = async (amount, planName) => {
  const transactionId = "TX-" + Date.now();

  return {
    transactionId,
    paymentUrl: `http://localhost:5173/fake-webpay?tx=${transactionId}&amount=${amount}&plan=${encodeURIComponent(planName)}`
  };
};
