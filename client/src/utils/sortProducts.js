export const sortByPrice = (products, order) => {
  //Sorting products by price
  const sortedProducts = products.sort((a, b) => {
    if (order !== "desc") {
      return a.valor < b.valor;
    }

    return a.valor > b.valor;
  });
  return sortedProducts;
};

export const sortByName = (products, order) => {
  //Sorting products by alphabetical order
  const sortedProducts = products.sort((a, b) => {
    if (order !== "desc") {
      return a.name < b.name;
    }

    return a.name > b.name;
  });
  return sortedProducts;
};
