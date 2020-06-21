import actionTypes from "../actions/types";

//Exporting the actions to be used in the components
export const getProducts = () => ({
  type: actionTypes.GET_PRODUCTS,
});

export const addProduct = (newProduct) => ({
  type: actionTypes.ADD_PRODUCT,
  newProduct,
});

export const editProduct = (productId, newProduct) => ({
  type: actionTypes.EDIT_PRODUCT,
  productId,
  newProduct,
});

export const deleteProduct = (productId) => ({
  type: actionTypes.DELETE_PRODUCT,
  productId,
});
