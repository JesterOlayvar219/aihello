export function formatCurrency(value) {
  if (value === 0) return "$0";
  return value ? `$${value.toFixed(2)}` : "$0";
}

export function formatPercentage(value) {
  if (value === 0) return "0%";
  return value ? `${value.toFixed(2)}%` : "0%";
}
