export const formatToMoney = (value) => {
  const formattedValue = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);
  return formattedValue;
};

export const formatToDecimal = (value) => {
  if (typeof value === "string" && value.indexOf("R$") > -1) {
    return parseFloat(value.replace("R$ ", "").replace(",", "."));
  }
  return value;
};
