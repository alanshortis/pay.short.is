export function formatNumbers(n) {
  n = isNaN(n) ? 0 : Math.abs(n.trim());
  return {
    amount: n.toFixed(2),
    displayAmount: new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP"
    }).format(n)
  };
}
