const formatCurrency = (val) => {
  const formatter = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  return formatter.format(val);
};

export { formatCurrency };
