const LOCALE = "en-EN";

const currencyFormatter = new Intl.NumberFormat(LOCALE, {
  style: "currency",
  currency: "EUR",
  minimumFractionDigits: 2,
});

export const formatCurrency = currencyFormatter.format;
