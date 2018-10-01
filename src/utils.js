export const formatNumbers = n => {
  n = isNaN(n) ? 0 : Math.abs(n.trim());
  return {
    amount: n.toFixed(2),
    displayAmount: new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(n)
  };
};

export const validProvider = (min, max, amount) =>
  (min === 0 || amount >= min) && (max === 0 || amount <= max);
